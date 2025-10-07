import useSWR from "swr";
import { chatsAtom } from "../store";
import { useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import Constants from "expo-constants";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}
const API_BASEURL =
  // OTAや本番ビルド時に使う
  Constants.expoConfig?.extra?.API_BASEURL ??
  //ローカル開発時に使う
  process.env.EXPO_PUBLIC_API_BASEURL ??
  // ③ デフォルト
  "http://localhost:10000";

export const useGetChats = () => {
  const setChat = useSetAtom(chatsAtom);
  const socketRef = useRef<Socket | null>(null);

  const { data, mutate, isLoading } = useSWR(
    `${API_BASEURL}/api/chats`,
    fetcher,
    {
      refreshInterval: 3000,
    }
  );

  useEffect(() => {
    if (data) {
      setChat(data);
    }
  }, [setChat, data]);
  // Socket.IO接続開始
  useEffect(() => {
    socketRef.current = io(process.env.EXPO_PUBLIC_API_BASEURL || "");

    socketRef.current.on("connect", () => {
      console.log("Socket connected:", socketRef.current?.id);
    });

    // サーバーからの更新通知受信
    socketRef.current.on("updatedChat", (msg) => {
      console.log("updatedChat received:", msg);

      // データを再取得してReduxを更新
      mutate();
    });

    socketRef.current.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [mutate]);

  return {
    data,
    isLoading,
  };
};

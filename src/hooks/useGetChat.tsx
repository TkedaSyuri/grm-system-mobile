import useSWR from "swr";
import { chatsAtom } from "../store";
import { useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import Constants from "expo-constants";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}
// const API_BASEURL = process.env.EXPO_PUBLIC_API_BASEURL;

export const useGetChats = () => {
  const setChat = useSetAtom(chatsAtom);
  const socketRef = useRef<Socket | null>(null);

  const { data, mutate, isLoading } = useSWR(
    `${process.env.EXPO_PUBLIC_API_BASEURL}/api/chats`,
    fetcher,
    {
      revalidateOnFocus: false,
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
      console.log("Socket connected d:", socketRef.current?.id);
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
  }, []);

  return {
    data,
    isLoading,
  };
};

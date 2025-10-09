import useSWR from "swr";
import { floorNuberAtom, floorsAtom } from "../store";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import Constants from "expo-constants";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}
const API_BASEURL = Constants.expoConfig?.extra?.API_BASEURL ??
process.env.EXPO_PUBLIC_API_BASEURL

export const useGetFloor = () => {
  const setFloor = useSetAtom(floorsAtom);
  const floorNumber = useAtomValue(floorNuberAtom);
  const socketRef = useRef<Socket | null>(null);

  const { data, error, mutate, isLoading } = useSWR(
    `${API_BASEURL}/api/rooms/${floorNumber}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    
    if (data) {
      setFloor(data);
    }
  }, [data, setFloor,floorNumber]);

  // Socket.IO接続開始
  useEffect(() => {
    socketRef.current = io(API_BASEURL || "");

    socketRef.current.on("connect", () => {
      console.log("Socket connected:", socketRef.current?.id);
    });

    // サーバーからの更新通知受信
    socketRef.current.on("updatedRoomState", (msg) => {
      console.log("received:", msg);

      // データを再取得してReduxを更新
      mutate();
    });

    socketRef.current.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [mutate,floorNumber]);

  return { error, isLoading };
};

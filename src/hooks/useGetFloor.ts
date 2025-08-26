import useSWR from "swr";
import { floorNuberAtom, floorsAtom } from "../store";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useGetFloor = () => {
  const setFloor = useSetAtom(floorsAtom);
  const floorNumber = useAtomValue(floorNuberAtom);
  const socketRef = useRef<Socket | null>(null);

  const { data, error, mutate, isLoading } = useSWR(
    `${process.env.EXPO_PUBLIC_APP_VERSION}/api/room/${floorNumber}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    
    if (data) {
      setFloor(data);
    }
  }, [data, setFloor]);

  // Socket.IO接続開始
  useEffect(() => {
    socketRef.current = io(process.env.EXPO_PUBLIC_APP_VERSION || "");

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
  }, [mutate]);

  return { error, isLoading };
};

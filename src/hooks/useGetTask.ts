import useSWR from "swr";
import { useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { tasksAtom } from "../store";
import { io, Socket } from "socket.io-client";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

const API_BASEURL ="https://grm-moniter-mobile-api.onrender.com"

export const useGetTask = () => {
  const setTask = useSetAtom(tasksAtom);
  const socketRef = useRef<Socket | null>(null);

  const { data, mutate, isLoading } = useSWR(
    `${API_BASEURL}/api/tasks`,
    fetcher,
    {
      revalidateOnFocus: false,
      refreshInterval: 3000, // ← chatと同じくポーリングを追加
    }
  );

  // SWRのデータをAtomへ反映
  useEffect(() => {
    if (data) {
      setTask(data);
    }
  }, [setTask, data]);

  // Socket.IO接続開始
  useEffect(() => {
socketRef.current = io(API_BASEURL, {
  transports: ["websocket"], // websocket のみ
});

    socketRef.current.on("connect", () => {
      console.log("Socket connected:", socketRef.current?.id);
    });

    // サーバーからの更新通知受信
    socketRef.current.on("updatedTask", (msg) => {
      console.log("updatedTask received:", msg);
      mutate(); // ← 通知を受け取ったら再取得
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


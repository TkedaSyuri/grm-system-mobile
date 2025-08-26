import useSWR from "swr";
import {  useSetAtom } from "jotai";
import { useEffect , useRef} from "react";
import { tasksAtom } from "../store";
import { io, Socket } from "socket.io-client";


async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useGetTask = () => {
  const setTask = useSetAtom(tasksAtom)
  const socketRef = useRef<Socket | null>(null);


  const { data, error,mutate, isLoading } = useSWR(
    `${process.env.EXPO_PUBLIC_APP_VERSION}/api/task`,
    fetcher,
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    if (data) {
      setTask(data);
    }
  }, [data, setTask]);

    // Socket.IO接続開始
  useEffect(() => {
    socketRef.current = io(process.env.EXPO_PUBLIC_APP_VERSION || "");

    socketRef.current.on("connect", () => {
      console.log("Socket connected:", socketRef.current?.id);
    });

    // サーバーからの更新通知受信
    socketRef.current.on("updatedTask", (msg) => {
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



  return {error, isLoading };
};
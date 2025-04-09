import useSWR from "swr";
import {  useSetAtom } from "jotai";
import { useEffect } from "react";
import { tasksAtom } from "../store";


async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useGetTask = () => {
  const setTask = useSetAtom(tasksAtom)

  const { data, error, isLoading } = useSWR(
    `${process.env.EXPO_PUBLIC_APP_VERSION}/api/tasks/all-tasks`,
    fetcher,
    { refreshInterval: 3000 }
  );

  useEffect(() => {
    if (data) {
      setTask(data);

    }
  }, [data, setTask]);
  

  return {error, isLoading };
};
import useSWR from "swr";
import { chatsAtom } from "../store";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useGetChat = () => {
  const setChat = useSetAtom(chatsAtom);

  const { data, error, isLoading } = useSWR(
    `${process.env.EXPO_PUBLIC_APP_VERSION}/api/chat`,
    fetcher,
    { refreshInterval: 3000 }
  );

  useEffect(() => {
    if (data) {
      setChat(data);
    }
  }, [data, setChat]);

  return { error, isLoading };
};

import useSWR from "swr";
import { floorsAtom } from "../store";
import { useSetAtom } from "jotai";
import { useEffect } from "react";


async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useGetFloor = (floorNumber: string) => {
  const setFloor = useSetAtom(floorsAtom)
  const { data, error, isLoading } = useSWR(
    `${process.env.EXPO_PUBLIC_APP_VERSION}/api/room/get/floor/${floorNumber}`,
    fetcher,
  );

  useEffect(() => {
    if (data) {
      setFloor(data);
    }
  }, [data, setFloor]);
  

  return {error, isLoading };
};
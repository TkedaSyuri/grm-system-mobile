import useSWR from "swr";
import { floorAtom, floorsAtom } from "../store";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";


async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useGetFloor = () => {
  const floorNumber = useAtomValue(floorAtom)

  const setFloor = useSetAtom(floorsAtom)
  const { data, error, isLoading } = useSWR(
    `${process.env.EXPO_PUBLIC_APP_VERSION}/api/room/get/floor/${floorNumber}`,
    fetcher,
    { refreshInterval: 3000 }
  );

  useEffect(() => {
    if (data) {
      setFloor(data);
    }
  }, [data, setFloor]);
  

  return {error, isLoading };
};
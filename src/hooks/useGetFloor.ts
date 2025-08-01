import useSWR from "swr";
import { floorNuberAtom, floorsAtom } from "../store";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";


async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useGetFloor = () => {
  const setFloor = useSetAtom(floorsAtom)
  const floorNumber = useAtomValue(floorNuberAtom)
console.log(process.env.EXPO_PUBLIC_APP_VERSION)
  const { data, error, isLoading } = useSWR(
    `${process.env.EXPO_PUBLIC_APP_VERSION}/api/room/${floorNumber}`,
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
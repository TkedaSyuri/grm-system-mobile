import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator,StyleSheet, Text, View } from "react-native";
import { useGetFloor } from "../src/hooks/useGetFloor";
import { useAtomValue } from "jotai";
import { floorAtom } from "../src/store";

export default function InitialScreen() {
  const { isLoading, error } = useGetFloor();


  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        router.replace("/home");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>アプリ起動中</Text>
      <ActivityIndicator  size="large" color="#007bff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellowgreen",
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin:10
  },
});

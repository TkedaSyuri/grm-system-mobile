import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#000000",
        headerStyle: { backgroundColor: "yellowgreen" },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen name="home/index" options={{ headerTitle: "客室状況" }} />
    </Stack>
  );
}

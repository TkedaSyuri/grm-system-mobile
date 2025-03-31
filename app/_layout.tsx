import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#000000",
        headerStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="home/index" options={{ headerTitle: "ホーム" }} />
    </Stack>
  );
}

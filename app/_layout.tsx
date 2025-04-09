import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#000000",
        headerStyle: { backgroundColor: "yellowgreen" },
        animation: "none",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="home/index"
        options={{ headerTitle: "客室状況", headerBackVisible: false }}
      />
      <Stack.Screen
        name="task/index"
        options={{ headerTitle: "タスク", headerBackVisible: false }}
      />
      <Stack.Screen
        name="task/completed"
        options={{ headerTitle: "完了したタスク", animation: "default" }}
      />
    </Stack>
  );
}

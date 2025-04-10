import { Stack, useRouter } from "expo-router";
import { Text ,StyleSheet} from "react-native";

export default function Layout() {
  const router = useRouter();
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
        options={{
          headerTitle: "タスク",
          headerBackVisible: false,
          headerRight: () => (
            <Text style={styles.text} onPress={() => router.push("/task/completed")}>完了したタスク</Text>
          ),
        }}
      />
      <Stack.Screen
        name="task/completed"
        options={{ headerTitle: "完了したタスク", animation: "default" }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
text: {
  fontSize:15,
  fontWeight:"500"
}
})

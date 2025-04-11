import { Stack, useRouter } from "expo-router";
import { useAtom } from "jotai";
import { Text ,StyleSheet} from "react-native";
import { isFloorModalAtom } from "../src/store";

export default function Layout() {
    const [showFloorModal, setShowFloorModal] = useAtom(isFloorModalAtom);
  
  const router = useRouter();
  const handleShowFloorModal = () => {
    setShowFloorModal(!showFloorModal);
  };

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
        options={{ headerTitle: "客室状況", headerBackVisible: false ,
          headerRight: () => (
            <Text style={styles.text} onPress={handleShowFloorModal}>フロアを変更</Text>
          ),

        }}
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
      <Stack.Screen
        name="chat/index"
        options={{ headerTitle: "チャット",          
           headerBackVisible: false,
        }}
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

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { useGetFloor } from "../../src/hooks/useGetFloor";
import Room, { Floors } from "../../src/components/Room";
import { useAtomValue } from "jotai";
import { floorsAtom } from "../../src/store";


export default function HomeScreen() {
  const Floors:Floors[] = useAtomValue(floorsAtom)
  console.log(useAtomValue(floorsAtom))

  const { isLoading, error } = useGetFloor("2");


  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 50 }}>
        {Floors.map((room) => (
          <Room
            key={room.id}
            id={room.id}
            roomNumber={room.roomNumber}
            roomState={room.roomState}
            isConsecutiveNight={room.isConsecutiveNight}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    color: "black",
  },
});

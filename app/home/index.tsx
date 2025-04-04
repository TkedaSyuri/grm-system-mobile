import { StyleSheet, Text, View, ScrollView } from "react-native";
import { router } from "expo-router";
import { useGetFloor } from "../../src/hooks/useGetFloor";
import Room  from "../../src/components/Room";
import { useAtomValue } from "jotai";
import { floorsAtom, modalAtom } from "../../src/store";
import ChangeStateModal from "../../src/components/Modal";
import { Floors } from "../../src/types";

export default function HomeScreen() {
  const Rooms: Floors[] = useAtomValue(floorsAtom);
  const isModal = useAtomValue(modalAtom);

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
        {Rooms.map((room) => (
          <Room
            key={room.id}
            roomNumber={room.roomNumber}
            roomState={room.roomState}
            isConsecutiveNight={room.isConsecutiveNight}
          />
        ))}
      </ScrollView>

      {isModal ? <ChangeStateModal  /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    color: "black",
  },
  modalStyle: {
    alignItems: "center",
  },
});

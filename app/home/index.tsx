import { StyleSheet, Text, View, ScrollView } from "react-native";
import Room from "../../src/components/Room";
import { useAtomValue, useSetAtom } from "jotai";
import { floorNuberAtom, floorsAtom, modalAtom } from "../../src/store";
import ChangeStateModal from "../../src/components/Modal";
import { Floors } from "../../src/types";
import { useGetFloor } from "../../src/hooks/useGetFloor";

export default function HomeScreen() {
  const Rooms: Floors[] = useAtomValue(floorsAtom);
  //フロアのページを変えるatom
  const setFloorNumber = useSetAtom(floorNuberAtom);
  const isModal = useAtomValue(modalAtom);

  useGetFloor();

  const handleFloor = (floorNumber: string) => {
    setFloorNumber(floorNumber);
  };
  return (
    <View style={styles.container}>
      <Text
        onPress={() => handleFloor("2")}
        style={{ color: "white", fontSize: 30 }}
      >
        2
      </Text>
      <Text
        onPress={() => handleFloor("3")}
        style={{ color: "white", fontSize: 30 }}
      >
        3
      </Text>
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
      {isModal ? <ChangeStateModal /> : null}
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

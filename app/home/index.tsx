import { StyleSheet, View, ScrollView } from "react-native";
import Room from "../../src/components/Room/Room";
import { useAtomValue } from "jotai";
import { floorsAtom, isFloorModalAtom, modalAtom } from "../../src/store";
import ChangeStateModal from "../../src/components/Room/Modal";
import type { Floors } from "../../src/types";
import { useGetFloor } from "../../src/hooks/useGetFloor";
import MenuBar from "../../src/components/MenuBar";
import FloorModal from "../../src/components/Room/FloorModal";

export default function HomeScreen() {
  const RoomsData: Floors[] = useAtomValue(floorsAtom);
  const isModal = useAtomValue(modalAtom);
  const isFloorModal = useAtomValue(isFloorModalAtom);

  useGetFloor();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={{ paddingVertical: 10 }}
      >
        {RoomsData.map((room) => (
          <Room
            key={room.id}
            id={room.id}
            roomNumber={room.roomNumber}
            roomState={room.roomState}
            isConsecutiveNight={room.isConsecutiveNight}
          />
        ))}
      </ScrollView>
            <View style={styles.menuBarContainer}>
        <MenuBar />

            </View>
      
      {isModal && <ChangeStateModal />}
      {isFloorModal && <FloorModal />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center",
  },
  menuBarContainer: {
    flex: 0.1,
    backgroundColor: "yellowgreen",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollArea: {
    flex: 1,
  },
});

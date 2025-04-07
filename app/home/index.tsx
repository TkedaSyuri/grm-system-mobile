import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Room from "../../src/components/Room";
import { useAtomValue } from "jotai";
import { floorsAtom, isFloorModalAtom, modalAtom } from "../../src/store";
import ChangeStateModal from "../../src/components/Modal";
import { Floors } from "../../src/types";
import { useGetFloor } from "../../src/hooks/useGetFloor";
import MenuBar from "../../src/components/MenuBar";
import FloorModal from "../../src/components/FloorModal";
import ChangFloorBtn from "../../src/components/ChangFloorBtn";

export default function HomeScreen() {
  const Rooms: Floors[] = useAtomValue(floorsAtom);
  const isModal = useAtomValue(modalAtom);
  const isFloorModal = useAtomValue(isFloorModalAtom);

  useGetFloor();

  return (
    <View style={styles.container}>
      <ChangFloorBtn />

      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={{ paddingVertical: 10 }}
      >
        {Rooms.map((room) => (
          <Room key={room.id} {...room} />
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
  scrollArea: {
    flex: 1,
  },
  menuBarContainer: {
    flex: 0.1,
    backgroundColor: "yellowgreen",
    justifyContent: "center",
    alignItems: "center",
  },
});

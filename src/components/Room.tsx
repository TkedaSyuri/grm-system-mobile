import { Text, View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useAtom, useSetAtom } from "jotai";
import { modalAtom, selectedRoomIdAtom, selectedRoomNumbersAtom } from "../store";
import { RoomState } from "../types";

export interface RoomsProps {
  id:number
  roomNumber: string;
  roomState: RoomState;
  isConsecutiveNight: boolean;
}

const Room: React.FC<RoomsProps> = (props) => {
  const { id,roomNumber, roomState, isConsecutiveNight } = props;
  const [isModal, setIsModal] = useAtom(modalAtom);
  const setSelectedRoomNumber = useSetAtom(selectedRoomNumbersAtom);
  const setSelectedRoomId = useSetAtom(selectedRoomIdAtom);

  const handleIsModal = (selectedNumber: string,id:number) => {
    setSelectedRoomNumber(selectedNumber);
setSelectedRoomId(id)
    setIsModal(!isModal);
  };

  let color = "";
  let state = "";
  if (roomState === "vacant") {
    color = "white";
    state = "空室";
  } else if (roomState === "required") {
    color = "#FF8095";
    state = "清掃指示";
  } else if (roomState === "cleaning") {
    color = "#7FA6D6";
    state = "清掃中";
  } else if (roomState === "completed") {
    color = "#6FCF97";
    state = "清掃完了";
  } else if (roomState === "unnecessary") {
    color = "#B0B0B0";
    state = "清掃不要";
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: `${color}`,
          width: "95%",
          margin: 5,
          borderWidth: 1,
          borderRadius: 5,
        }}
        onLongPress={() => handleIsModal(roomNumber,id)}
      >
        <View style={styles.buttonContainer}>
          <Text style={[styles.text]}>{roomNumber}号室</Text>
          <Text style={styles.stateText}>{state}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginStart: 5,
  },
  buttonContainer: {
    alignItems: "center",
    borderWidth: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    padding: 5,
  },
  stateText: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 2,
  },
});

export default Room;

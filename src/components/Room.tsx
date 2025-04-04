import { Text, View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useAtom, useSetAtom } from "jotai";
import { modalAtom, selectedRoomNumbersAtom } from "../store";
import { RoomState } from "../types";


export interface RoomsProps {
  roomNumber: string;
  roomState: RoomState;
  isConsecutiveNight: boolean;
}

const Room: React.FC<RoomsProps> = (props) => {
  const { roomNumber, roomState, isConsecutiveNight } = props;
  const [isModal, setIsModal] = useAtom(modalAtom);
  const setSelectedRoomNumber = useSetAtom(selectedRoomNumbersAtom);

  const handleIsModal = (selectedNumber:string) => {
    setSelectedRoomNumber(selectedNumber)
    setIsModal(!isModal);
  };

  let color = "";
  let state = ""
  if (roomState === "vacant") {
    color = "white";
    state = "空室"
  } else if (roomState === "required") {
    color = "#FF8095";
    state = "清掃指示"
  } else if (roomState === "cleaning") {
    color = "#7FA6D6";
    state = "清掃中"
  } else if (roomState === "completed") {
    color = "#6FCF97";
    state = "清掃完了"
  } else if (roomState === "unnecessary") {
    color = "#B0B0B0";
    state = "清掃不要"

  }
  



  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: `${color}`,
          width: "100%",
          margin: 5,
          borderWidth: 2,
        }}
        onLongPress={()=>handleIsModal(roomNumber)}
      >
        <View style={styles.buttonContainer}>
          <Text style={[styles.buttonText]}>{roomNumber}号室</Text>
          <Text style={{fontWeight:"bold",fontSize:25}}>{state}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "bold",
    fontSize: 30,
    padding: 7,
  },
  buttonContainer: {
  alignItems:"center"
  },
});

export default Room;

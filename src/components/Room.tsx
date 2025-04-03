import { Text, View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export type RoomState =
  | "vacant"
  | "required"
  | "cleaning"
  | "completed"
  | "unnecessary";

export interface Floors {
  id: number;
  roomNumber: string;
  roomState: RoomState;
  isConsecutiveNight: boolean;
}



const Room: React.FC<Floors> = (props) => {
  const { id, roomNumber, roomState, isConsecutiveNight } = props;

  let color = "";
  if (roomState === "vacant") {
    color = "white"; 
  } else if (roomState === "required") {
    color = "#FF8095"; 
  } else if (roomState === "cleaning") {
    color = "#7FA6D6"; 
  } else if (roomState === "completed") {
    color = "#6FCF97"; 
  } else if (roomState === "unnecessary") {
    color = "#B0B0B0"; 
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
      >
        <Text style={[styles.buttonText]}>{roomNumber}号室</Text>
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
});

export default Room;

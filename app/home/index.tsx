import { StyleSheet, Text, View, ScrollView } from "react-native";
import Room from "../../src/components/Room";
import { useAtomValue, useSetAtom } from "jotai";
import { floorAtom, floorsAtom, modalAtom } from "../../src/store";
import ChangeStateModal from "../../src/components/Modal";
import { Floors } from "../../src/types";
import { useGetFloor } from "../../src/hooks/useGetFloor";

export default function HomeScreen() {
  
  const Rooms: Floors[] = useAtomValue(floorsAtom);
  const setFloorNumber = useSetAtom(floorAtom);
  const floorNumber = useAtomValue(floorAtom)
  const isModal = useAtomValue(modalAtom);

  useGetFloor();


console.log(floorNumber)

const handleRooms =(floorNumber:string)=>{
  setFloorNumber(floorNumber)
}
  return (
    <View style={styles.container}>
      <Text onPress={()=>handleRooms("3")} style={{color:"white",fontSize:30}}>3</Text>
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

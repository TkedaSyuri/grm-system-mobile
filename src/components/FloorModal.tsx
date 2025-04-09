import { useAtom, useSetAtom } from "jotai";
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { StyleSheet } from "react-native";
import { floorNuberAtom, isFloorModalAtom } from "../store";

const RoomNumbers = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];


const FloorModal = () => {
  const setFloorNumber = useSetAtom(floorNuberAtom);
  const [showFloorModal, setShowFloorModal] = useAtom(isFloorModalAtom);

  const handleFloor = (floorNumber: string) => {
    setFloorNumber(floorNumber);
  };

  const handleCloseBtn = () => {
    setShowFloorModal(!showFloorModal);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={showFloorModal}>
      <TouchableWithoutFeedback onPress={handleCloseBtn}>
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <View style={styles.container}>
              {RoomNumbers.map((roomNumber, index) => (
                <Text
                  key={index}
                  onPress={() => handleFloor(`${roomNumber}`)}
                  style={styles.text}
                >
                  {roomNumber}F
                </Text>
              ))}
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowFloorModal(false)}
            >
              <Text style={styles.closeText}>閉じる</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  container: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
    backgroundColor: "#f0f0f0",
    color: "#333",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 8,
    width: "100%",
    textAlign: "center",
    overflow: "hidden",
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  closeText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default FloorModal;

import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useAtom, useAtomValue } from "jotai";
import { modalAtom, selectedRoomIdAtom, selectedRoomNumbersAtom } from "../store";
import StateBtn from "./StateBtn";

function ChangeStateModal() {
  const [isModal, setIsModal] = useAtom(modalAtom);
  const selectedRoomNumber = useAtomValue(selectedRoomNumbersAtom);
  const selectedRoomId = useAtomValue(selectedRoomIdAtom);
  return (
    <Modal animationType="slide" transparent={true} visible={isModal}>
      <TouchableWithoutFeedback onPress={() => setIsModal(false)}>
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <Text style={styles.roomNumberText}>{selectedRoomNumber}号室</Text>
            <StateBtn stateName="清掃中" state="cleaning" roomId={selectedRoomId} />
            <StateBtn stateName="清掃完了" state="completed" roomId={selectedRoomId}/>
            <StateBtn stateName="清掃不要" state="unnecessary" roomId={selectedRoomId}/>
            <StateBtn stateName="清掃指示" state="required" roomId={selectedRoomId}/>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModal(false)}
            >
              <Text style={styles.closeText}>閉じる</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
  },
  closeText: {
    color: "white",
    fontSize: 16,
  },
  roomNumberText: {
    fontSize: 30,
    fontWeight: "bold",
    borderBottomWidth:3,
  },
});

export default ChangeStateModal;

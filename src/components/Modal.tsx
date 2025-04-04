import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useAtom, useAtomValue} from "jotai";
import { modalAtom, selectedRoomNumbersAtom} from "../store";
import StateBtn from "./StateBtn";

function ChangeStateModal() {
  const [isModal, setIsModal] = useAtom(modalAtom);
  const selectedRoomNumber = useAtomValue(selectedRoomNumbersAtom)


  return (
    <Modal animationType="slide" transparent={true} visible={isModal}>
      <TouchableWithoutFeedback onPress={() => setIsModal(false)}>
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>{selectedRoomNumber}号室</Text>
            <StateBtn name="清掃中" state="cleaning" />
            <StateBtn name="清掃完了" state="completed" />
            <StateBtn name="清掃不要" state="unnecessary" />
            <StateBtn name="清掃指示" state="required" />
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
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  closeText: {
    color: "white",
    fontSize: 16,
  },
});

export default ChangeStateModal;

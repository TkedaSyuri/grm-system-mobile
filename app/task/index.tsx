import { StyleSheet, View} from "react-native";
import MenuBar from "../../src/components/MenuBar";
import { useGetTask } from "../../src/hooks/useGetTask";
import TaskList from "../../src/components/TaskList";


export default function TaskScreen() {
  useGetTask();
  return (
    <View style={styles.container}>
      <TaskList/>
      <View style={styles.menuBarContainer}>
        <MenuBar />
      </View>
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
});

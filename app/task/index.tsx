import { StyleSheet, View} from "react-native";
import MenuBar from "../../src/components/MenuBar";
import { useGetTask } from "../../src/hooks/useGetTask";
import CompletedTaskList from "../../src/components/CompletedTaskList";
import {  useAtomValue } from "jotai";
import { isTaskModalAtom } from "../../src/store";
import TaskList from "../../src/components/TaskList";
import CheckTaskBtn from "../../src/components/CheckTaskBtn";

export default function TaskScreen() {
  const isTaskModal = useAtomValue(isTaskModalAtom);
  useGetTask();
  return (
    <View style={styles.container}>
      <CheckTaskBtn/>
      {isTaskModal ? <CompletedTaskList /> : <TaskList />}
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

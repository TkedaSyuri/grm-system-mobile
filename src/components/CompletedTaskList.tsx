import { StyleSheet, View, ScrollView } from "react-native";
import CompletedTask from "./CompletedTask";
import { useAtomValue } from "jotai";
import { tasksAtom } from "../store";

const CompletedTaskList = () => {
  const TasksData = useAtomValue(tasksAtom);

  return (
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={{ paddingVertical: 50 }}
      >
        {TasksData.map((task) => (
          <CompletedTask
            key={task.id}
            id={task.id}
            task={task.task}
            isCompleted={task.isCompleted}
          />
        ))}
      </ScrollView>
  );
};

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

export default CompletedTaskList;

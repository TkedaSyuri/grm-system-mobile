import { StyleSheet,View,Text} from "react-native";
import { useAtomValue } from "jotai";
import { tasksAtom } from "../../src/store";
import CompletedTask from "../../src/components/Task/CompletedTask";
import TaskList from "../../src/components/Task/TaskList";

const CompletedTaskScreen = () => {
  const TasksData = useAtomValue(tasksAtom);

  return (
      // <ScrollView
      //   style={styles.scrollArea}
      //   contentContainerStyle={{ paddingVertical: 20 }}
      // >
      //   {TasksData.map((task) => (
      //     <CompletedTask
      //       key={task.id}
      //       id={task.id}
      //       task={task.task}
      //       isCompleted={task.isCompleted}
      //     />
      //   ))}
      // </ScrollView>
      <View style={styles.container}>
      <TaskList  filterCompleted={true} />
      <View style={styles.menuBarContainer}>
      </View>
    </View>
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

export default CompletedTaskScreen;

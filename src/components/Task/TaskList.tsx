import { ScrollView, StyleSheet, View } from "react-native";
import { useAtomValue } from "jotai";
import { tasksAtom } from "../../store";
import InCompletedTaskItem from "./InCompletedTaskItem";
import CompletedTaskItem from "./CompletedTaskItem";

const TaskList: React.FC<{ filterCompleted: boolean }> = ({
  filterCompleted,
}) => {
  const TasksData = useAtomValue(tasksAtom);
  const filteredTasks = TasksData.filter(
    (task) => task.isCompleted === filterCompleted
  );

  return (
    <ScrollView
      style={styles.scrollArea}
      contentContainerStyle={{ paddingVertical: 20 }}
    >
      {filteredTasks.map((task) => (
        <View key={task.id} >
          {task.isCompleted === false ? (
            <InCompletedTaskItem
              id={task.id}
              task={task.task}
              isCompleted={task.isCompleted}
            />
          ) : (
            <CompletedTaskItem
              id={task.id}
              task={task.task}
              isCompleted={task.isCompleted}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollArea: {
    flex: 1,
  },
});

export default TaskList;

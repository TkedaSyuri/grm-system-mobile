import { ScrollView, StyleSheet } from "react-native";
import { useAtomValue } from "jotai";
import { tasksAtom } from "../../store";
import TaskListItem from "./TaskListItem";



const TaskList:React.FC<{filterCompleted:boolean}> = ({filterCompleted}) => {
  const TasksData = useAtomValue(tasksAtom);
  const filteredTasks = TasksData.filter(task => task.isCompleted === filterCompleted);

  return (
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        {filteredTasks.map((task) => (
          <TaskListItem
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
  scrollArea: {
    flex: 1,
  },
});

export default TaskList;

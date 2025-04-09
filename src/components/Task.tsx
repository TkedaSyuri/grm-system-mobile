import { StyleSheet, View, TouchableOpacity, Text } from "react-native";


interface TaskProps {
  id: number;
  task: string;
  isCompleted: boolean;
}

const Task: React.FC<TaskProps> = (props) => {
  const { id, task, isCompleted } = props;

  const handleCompletePress = async (id: number, isCompleted: boolean) => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_APP_VERSION}/api/tasks/edit-completed-task/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isCompleted: !isCompleted }),
        }
      );
      return response.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      {isCompleted === false ? (
        <>
          <View style={styles.taskBox}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
          <TouchableOpacity
            onPress={() => handleCompletePress(id, isCompleted)}
          >
            <View style={styles.completedBtn}>
              <Text style={styles.completedBtnText}>完了</Text>
            </View>
          </TouchableOpacity>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  taskBox: {
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#fff",
    padding: 10,
  },
  taskText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  completedBtn: {
    backgroundColor: "green",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  completedBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
export default Task;

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface TaskProps {
  id: number;
  task: string;
  isCompleted: boolean;
}

const CompletedTask: React.FC<TaskProps> = (props) => {
  const { id, task, isCompleted } = props;
  return (
    <>
      {isCompleted === true ? (
        <>
          <View style={styles.container}>
            <View style={styles.taskBox}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
        </>
      ): null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
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
});

export default CompletedTask;

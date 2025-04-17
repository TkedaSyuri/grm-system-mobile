import { View, Text,StyleSheet } from "react-native";


interface CompletedTaskProps {
  task: string
}

const CompletedTask: React.FC<CompletedTaskProps> = (props) => {
  const { task} = props;
  return (
    <View style={styles.container}>
      <View style={styles.taskBox}>
        <Text style={styles.taskText}>{task}</Text>
      </View>
    </View>
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

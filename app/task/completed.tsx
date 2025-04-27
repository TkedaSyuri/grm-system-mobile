import { StyleSheet, View, Text } from "react-native";
import TaskList from "../../src/components/Task/TaskList";

const CompletedTaskScreen = () => {

  return (
    <View style={styles.container}>
      <TaskList filterCompleted={true} />
      <View style={styles.menuBarContainer}></View>
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

import { ListItem, Button } from "@rneui/themed";
import { StyleSheet, View, Text } from "react-native";
import { TaskProps } from "../types";

const TaskListItem: React.FC<TaskProps> = (props) => {
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
    <View>
      {isCompleted === false ? (
        <ListItem.Swipeable
          leftContent={(reset) => (
            <View style={{ margin: "auto"}}>
              <Button
                onPress={() => {
                  if (handleCompletePress) {
                    handleCompletePress(id, isCompleted);
                  }
                  reset();
                }}
                buttonStyle={{
                  backgroundColor: "#00CC00",
                  paddingVertical: 10,
                  paddingLeft: 1,
                  marginTop: 2,
                  borderRadius: 8,
                }}
                icon={{ name: "check" }}
              >
                <Text style={styles.completedBtnText}>完了</Text>
              </Button>
            </View>
          )}
        >
          <ListItem.Content style={styles.taskBox}>
            <ListItem.Title style={styles.taskText}>{task}</ListItem.Title>
          </ListItem.Content>
        </ListItem.Swipeable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  completedBtn: {
    padding: 20,
    backgroundColor: "#00CC00",
    paddingVertical: 10,
    borderRadius: 8,
  },
  completedBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
  },
  taskBox: {
    backgroundColor: "#EEEEEE",
    padding: 15,
    marginTop: 5,
    borderRadius: 12,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  taskText: {
    fontWeight: "500",
    fontSize: 18,
    color: "#333",
  },
});
export default TaskListItem;

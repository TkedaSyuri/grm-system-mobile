import { ListItem, Button } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

interface InCompletedTaskItemProps {
  id: number;
  task: string;
  isCompleted: boolean;
  setScrollEnabled: (enabled: boolean) => void;}

const InCompletedTaskItem: React.FC<InCompletedTaskItemProps> = (props) => {
  const { id, task, isCompleted ,setScrollEnabled} = props;
  const handleIsCompletePress = async (id: number, isCompleted: boolean) => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_APP_VERSION}/api/task/complete-task/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isCompleted: isCompleted }),
        }
      );
      return response.json();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ListItem.Swipeable
      onSwipeBegin={() => setScrollEnabled(false)}
      onSwipeEnd={() => setScrollEnabled(true)}
      rightContent={(reset) => (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Button
            onPress={() => {
              handleIsCompletePress?.(id, isCompleted);
              reset();
            }}
            buttonStyle={{
              backgroundColor: "#00CC00",
              paddingVertical: 13,
              paddingHorizontal: 15,
              borderRadius: 8,
            }}
            icon={{ name: "check", color: "white", size: 17 }}
            title="完了"
            titleStyle={{
              color: "white",
              fontWeight: "bold",
              fontSize: 15,
              marginLeft: 3,
            }}
          />
        </View>
      )}
    >
      <ListItem.Content style={styles.taskBox}>
        <ListItem.Title style={styles.taskText}>{task}</ListItem.Title>
      </ListItem.Content>
    </ListItem.Swipeable>
  );
};
const styles = StyleSheet.create({
  taskBox: {
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

export default InCompletedTaskItem;

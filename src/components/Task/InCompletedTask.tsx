

import { ListItem, Button } from "@rneui/themed";
import { StyleSheet, View, Text } from "react-native";

interface InCompletedTaskProps {
    id: number;
    task: string;
    isCompleted: boolean;
}

const InCompletedTask:React.FC<InCompletedTaskProps> = (props) => {
    const {id,task,isCompleted} = props
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
        <ListItem.Swipeable
          leftWidth={90}
          rightContent={(reset) => (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Button
                onPress={() => {
                  handleCompletePress?.(id, isCompleted);
                  reset();
                }}
                buttonStyle={{
                  backgroundColor: "#00CC00",
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  borderRadius: 8,
                }}
                icon={{ name: "check", color: "white", size: 15 }}
                title="完了"
                titleStyle={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 14,
                  marginLeft: 5,
                }}
              />
            </View>
          )}
        >
          <ListItem.Content style={styles.taskBox}>
            <ListItem.Title style={styles.taskText}>{task}</ListItem.Title>
          </ListItem.Content>
        </ListItem.Swipeable>
  )
}
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
  

export default InCompletedTask
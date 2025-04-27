import { Button, ListItem } from "@rneui/base";
import { View,StyleSheet } from "react-native";


interface CompletedTaskItemProps {
  id:number;
  task: string;
  isCompleted:boolean
  setScrollEnabled: (enabled: boolean) => void;
}

const CompletedTaskItem: React.FC<CompletedTaskItemProps> = (props) => {
  const { id,task,isCompleted,setScrollEnabled} = props;
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
    leftContent={(reset) => (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          onPress={() => {
            handleIsCompletePress?.(id, isCompleted);
            reset();
          }}
          buttonStyle={{
            backgroundColor: "#00bfff",
            paddingLeft:1,
            borderRadius: 8,
          }}
          icon={{  color: "white", size: 15 }}
          title="戻す"
          titleStyle={{
            marginHorizontal:10,
            marginVertical:5,
            color: "white",
            fontWeight: "bold",
            fontSize: 14,
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
backgroundColor: "#00CC00",
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


export default CompletedTaskItem;

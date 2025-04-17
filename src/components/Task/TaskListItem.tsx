import {  View} from "react-native";
import CompletedTask from "./CompletedTask";
import InCompletedTask from "./InCompletedTask";


export interface TaskListItemProps {
  id: number;
  task: string;
  isCompleted: boolean;
}


const TaskListItem: React.FC<TaskListItemProps> = (props) => {
  const { id, task, isCompleted} = props;


  return (
    <View>
      {isCompleted === false ? (
        <InCompletedTask id={id} task={task} isCompleted={isCompleted} />
      ) : (
        <CompletedTask   task={task} />
      )}
    </View>
  );
  };

export default TaskListItem;

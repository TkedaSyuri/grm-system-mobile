import { ScrollView, StyleSheet } from "react-native";

import React from "react";
import { useAtomValue } from "jotai";
import { tasksAtom } from "../store";
import Task from "./TaskListItem";

const TaskList = () => {
  const TasksData = useAtomValue(tasksAtom);

  return (
    <>
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={{ paddingVertical: 50 }}
      >
        {TasksData.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            task={task.task}
            isCompleted={task.isCompleted}
          />
        ))}
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollArea: {
    flex: 1,
  },
});

export default TaskList;

import { Text, TouchableOpacity } from "react-native";
interface StateBtnProps {
  stateName: string;
  state: string;
  roomId: number;
}

import React from "react";

const StateBtn: React.FC<StateBtnProps> = (props) => {
  const { stateName, state ,roomId} = props;

  let color = "";
  if (state === "vacant") {
    color = "white";
  } else if (state === "required") {
    color = "#FF8095";
  } else if (state === "cleaning") {
    color = "#7FA6D6";
  } else if (state === "completed") {
    color = "#6FCF97";
  } else if (state === "unnecessary") {
    color = "#B0B0B0";
  }

  const handleUpdateState = async (state: string, roomId: number) => {
    console.log(roomId)
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_APP_VERSION}/api/room/edit/room-state/${roomId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ roomState: `${state}` }),
        }
      );
      if (!response.ok) {
        return console.error(`お部屋のステータス変更に失敗 ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity onPress={()=>handleUpdateState(state,roomId)} >
      <Text
        style={[
          {
            backgroundColor: `${color}`,
            width: 120,
            padding: 5,
            margin: 5,
            fontSize: 25,
            textAlign: "center",
            borderWidth: 2,
            borderRadius: 5,
            fontWeight: "bold",
          },
        ]}
      >
        {stateName}
      </Text>
    </TouchableOpacity>
  );
};

export default StateBtn;

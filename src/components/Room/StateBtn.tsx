import { useSetAtom } from "jotai";
import { Text, TouchableOpacity } from "react-native";
import { isModalAtom } from "../../store";

interface StateBtnProps {
  stateName: string;
  state: string;
  roomId: number;
}
//部屋の状態を変更するボタンコンポーネント
const StateBtn: React.FC<StateBtnProps> = (props) => {
  const { stateName, state, roomId } = props;
  const isSetModal = useSetAtom(isModalAtom);

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
//部屋の状態を変更する処理
  const handleUpdateState = async (state: string, roomId: number) => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_APP_VERSION}/api/room/room-state/${roomId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ roomState: `${state}` }),
        }
      );
      if (!response.ok) {
        return console.error(`お部屋のステータス変更に失敗 ${response.status}`);
      }
      isSetModal(false);

      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity onPress={() => handleUpdateState(state, roomId)}>
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

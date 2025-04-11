import { ScrollView, StyleSheet, Text } from "react-native";
import ChatListItem from "./ChatListItem";
import { useAtomValue } from "jotai";
import { chatsAtom } from "../store";
import { useGetChat } from "../hooks/useGetChat";

const ChatList = () => {
  const ChatData = useAtomValue(chatsAtom);
  useGetChat()
  return (
    <ScrollView
      style={styles.scrollArea}
      contentContainerStyle={{ paddingVertical: 30 }}
    >
      {ChatData.map((chat) => (
        <ChatListItem
          key={chat.id}
          id={chat.id}
          message={chat.message}
          createdAt={chat.createdAt}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollArea: {
    flex: 1,
  },
});

export default ChatList;

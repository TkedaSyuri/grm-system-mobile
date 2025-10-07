import { ScrollView, StyleSheet } from "react-native";
import ChatListItem from "./ChatListItem";
import { useAtomValue } from "jotai";
import { chatsAtom } from "../../store";
import { useGetChats } from "../../hooks/useGetChat";

const ChatList = () => {
  const ChatData = useAtomValue(chatsAtom);
  useGetChats()
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
          sender={chat.sender}
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

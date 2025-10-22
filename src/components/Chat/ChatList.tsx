import {  FlatList, StyleSheet } from "react-native";
import ChatListItem from "./ChatListItem";
import { useAtomValue } from "jotai";
import { chatsAtom } from "../../store";
import { useGetChats } from "../../hooks/useGetChat";

const ChatList = () => {
  const ChatData = useAtomValue(chatsAtom);
  useGetChats();
  return (
    <FlatList
      style={styles.scrollArea}
      contentContainerStyle={{ paddingVertical: 30 }}
      data={[...ChatData].reverse()}
      inverted
      keyExtractor={(chat) => chat.id.toString()}
      renderItem={({ item }) => (
        <ChatListItem
          key={item.id}
          id={item.id}
          message={item.message}
          sender={item.sender}
          floorNumber={item.floorNumber}
          createdAt={item.createdAt}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  scrollArea: {
    flex: 1,
  },
});

export default ChatList;

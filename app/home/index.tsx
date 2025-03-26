import { Text } from "react-native";
import { StyleSheet, View, Button } from 'react-native';

export default function HomeScreen() {
  return(
    <View style={styles.container}>
    <Text style={styles.title}>ホーム画面</Text>

    </View>

  )
  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  });
  


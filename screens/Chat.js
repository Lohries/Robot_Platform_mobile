import { StyleSheet, Text, View } from 'react-native';

export default function Chat() {
    return (
        <View style={styles.container}>
            <Text>Chat</Text>

        </View>

    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'skyblue',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '20%', 
    }
})
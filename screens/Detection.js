import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Detection() {
    return (
        <View style={styles.container}>
            <Text>Detection</Text>

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
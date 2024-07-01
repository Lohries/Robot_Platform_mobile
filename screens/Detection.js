import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Detection() {
    return (
        <View style={styles.container}>
            <Text>Detection</Text>
            <StatusBar style="auto" />

            <View style={styles.footer}>
                <Image style={styles.footerImg1} source={require('../assets/img1.png')} />
                <Image style={styles.footerImg2} source={require('../assets/img2.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a4fae4',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '20%',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      backgroundColor: '#333',
      width: '100%',
      height: '18%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    footerImg1: {
      width: 90,
      height: 100,
    },
    footerImg2: {
      width: 200,
      height: 100,
    }
  });
  
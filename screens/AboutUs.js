import { StyleSheet, Text, View } from 'react-native';

export default function AboutUs() {
    return (
        <View style={styles.container}>
            <Text>About Us</Text>
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
      backgroundColor: 'skyblue',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '20%', 
      fontWeight: 'bold',
      fontSize: '500'
    },
    footer: {
        position: 'absolute', 
        bottom: 0,
        flexDirection: 'row',
        backgroundColor: 'gray',
        width: '100%',
        height: '20%',
        justifyContent: 'space-evenly',
        alignItems: 'center', 
    },
    footerImg1: {
        width: 90,  
        height: 150, 
    },
    footerImg2: {
        width: 200,  
        height: 90, 
    }
})
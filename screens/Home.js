import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Inmoov</Text>
      <Text>Maia</Text>
      <StatusBar style="auto" />
      
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>LogIn</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <Image style={styles.footerImg1} source={require('../assets/img1.png')} />
        <Image style={styles.footerImg2} source={require('../assets/img2.png')} />
      </View>

    </View>

  );
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
  },
  buttons:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  button: {
    backgroundColor: '#3dfdcd',
    height: 60,
    width: 180,
    borderRadius: 14,
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  }
});

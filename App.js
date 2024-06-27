import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Inmoov </Text>
      <StatusBar style="auto" />
      <View style={styles.footer}>
        <Text style={styles.footerText}>O Aplicativo visa fazer a comunicação com o hardware fisico, além de ter determindas funcoes que extrapolam as ideias iniciais do projeto</Text>
      </View>
    </View>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3dfdcd',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '20%', 
  },
  footer: {
    position: 'absolute', 
    bottom: 0,
    backgroundColor: 'gray',
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  footerText: {
    color: 'white',
  },
});

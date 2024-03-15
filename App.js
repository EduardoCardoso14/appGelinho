import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.imgnav}>
          <Image
            style={styles.imgicon}
            source={require("./assets/icongelo.gif")}
          />
        </View>
        <View style={styles.textnav}>
        <Text>BEM VINDO AO GELINHU</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77d4d4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    top: -340,
    borderWidth: 2,
    borderColor: '#bbe3e3',
    fontFamily: 'Montserrat'
  },
  textnav:{
    top: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    left: '3%',
    width: '50%',
    height: '20%',
    position: 'relative',
  },
  imgnav: {
    top: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    right: '35%',
    width: '30%',
    height: '50%',
    position: 'relative'
  },
  imgicon: {
    width: '80%',
    height: '80%'
  },
});

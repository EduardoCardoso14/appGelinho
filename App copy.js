import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, Image, Button } from 'react-native';

import styles from './style/style.js'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bg.png')} resizeMode="cover" style={styles.imagebgs}/>
      <View style={styles.nav}>
        <View style={styles.imgnav}>
          <Image
            style={styles.imgicon}
            source={require("./assets/icongelo.gif")}
          />
        </View>
        <View style={styles.textnav}>
          <Text style={styles.textnav2}>Bem vindo ao Gelinhu!
          </Text>
        </View>
      </View>
      <View style={styles.titlezin}>
        <Text style={styles.texttitle}>Compre seu gelo de forma rápida!</Text>
      </View>
      <View style={styles.main}>
        <Image
          style={styles.imggelin}
          source={require("./assets/splazi.png")}
        />
        <View style={styles.comprinha}>
          <Text style={styles.textcomprinha1}>Pacote de Gelo 5kg</Text>
          <Text style={styles.textcomprinha2}>R$ 20,00</Text>
          <View style={styles.butao}>
            <Button color={'#6fbbd3'} title="COMPRAR"/>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
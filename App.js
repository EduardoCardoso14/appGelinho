import * as React from 'react';
import { View, Button, Text, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { BorderlessButton } from 'react-native-gesture-handler';


function Cadastro({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5, position: "absolute", width: '100%', height: '15%', top: 120, }}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={require("./assets/gelos.jpg")}
        />
      </View>
      <View style={{ margin: 5, position: "absolute", top: 30 }}>
        <Button
          title="LOGIN"
          onPress={() => navigation.navigate('Login')}
        />
        <Text>Já tem uma conta? Faça login!</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', position: 'relative', top: 35 }}>
        <Text style={{ margin: 10, fontSize: 20, }}>Cadastro</Text>
        <TextInput style={{
          height: 40,
          width: 202,
          margin: 6,
          borderWidth: 1,
          padding: 10
        }}
          placeholder="Seu nome">
        </TextInput>
        <TextInput style={{
          height: 40,
          width: 202,
          margin: 6,
          borderWidth: 1,
          padding: 10
        }}
          placeholder="Seu email">
        </TextInput>
        <TextInput style={{
          height: 40,
          width: 202,
          margin: 6,
          borderWidth: 1,
          padding: 10
        }}
          placeholder="Sua senha">
        </TextInput>
        <View style={{ margin: 5 }}>
        </View>
        <Button
          style={{ margin: 5, color: '#4b9db7' }}
          title="SALVAR"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={{ borderWidth: 2, borderColor: '#4b9db7', backgroundColor: '#81b2c1', justifyContent: 'center', position: 'absolute', width: '105%', height: '15%', bottom: 0, }}>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> Gelinhu's Commerce 🧊</Text>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> All rights reserved ©️</Text>

      </View>
    </View>
  );
}

function EditarCadastro({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ borderWidth: 3, borderRadius: 85, borderColor: '#4b9db7', width: '27%', height: '16%', position: 'absolute', top: 70 }} >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ImageBackground source={require("./assets/user.png")} style={{ width: '100%', height: '100%' }}>
            <Text style={styles.letra_a}>             </Text>
            <Text style={styles.letra_a}>             </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', top: -30, }}>
        <Text style={{ margin: 5 }}>Editar Cadastro</Text>
        <TextInput style={{
          height: 40,
          width: 202,
          margin: 6,
          borderWidth: 1,
          padding: 10
        }}
          placeholder="Seu nome">
        </TextInput>
        <TextInput style={{
          height: 40,
          width: 202,
          margin: 6,
          borderWidth: 1,
          padding: 10
        }}
          placeholder="Seu email">
        </TextInput>
        <TextInput style={{
          height: 40,
          width: 202,
          margin: 6,
          borderWidth: 1,
          padding: 10
        }}
          placeholder="Sua senha">
        </TextInput>
        <View style={{ margin: 5 }}>
        </View>
        <Button
          style={{ margin: 5 }}
          title="SALVAR"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={{ borderWidth: 2, borderColor: '#4b9db7', backgroundColor: '#81b2c1', justifyContent: 'center', position: 'absolute', width: '105%', height: '15%', bottom: 0, }}>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> Gelinhu's Commerce 🧊</Text>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> All rights reserved ©️</Text>

      </View>
    </View>  
  ); 
}



function Login({ navigation }) { 
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5, position: "absolute", width: '100%', height: '15%', top: 120, }}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={require("./assets/gelos.jpg")}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', position: 'relative', top: 30 }}>
        <Text style={{ margin: 10, fontSize: 20 }}>Login</Text>
        <TextInput style={{
          height: 40,
          width: 202,
          margin: 6,
          borderWidth: 1,
          padding: 10
        }}
          placeholder="Seu email">
        </TextInput>
        <TextInput style={{
          height: 40,
          width: 202,
          margin: 6,
          marginBottom: 15,
          borderWidth: 1,
          padding: 10
        }}
          placeholder="Senha">
        </TextInput>
        <Button title="ENTRAR" onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={{ margin: 5, position: "absolute", top: 30 }}>
        <Button
          title="Voltar" onPress={() => navigation.navigate('Cadastro')}
        />
        <Text>Não tem conta? Volte para o cadastro</Text>
      </View>
      <View style={{ borderWidth: 2, borderColor: '#4b9db7', backgroundColor: '#81b2c1', justifyContent: 'center', position: 'absolute', width: '105%', height: '15%', bottom: 0, }}>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> Gelinhu's Commerce 🧊</Text>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> All rights reserved ©️</Text>

      </View>
    </View>
  );
}
function Home({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, position: 'absolute', left: 30, top: 15, borderWidth: 1, padding: 5, borderColor: '#4b9db7' }}>Seja bem vindo ao Gelinhu's!</Text>
      <View style={{ margin: 5, width: 80, position: "absolute", top: 10, left: '73%' }}>
        <Button
          title="Sair" onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={{ borderWidth: 3, borderRadius: 85, borderColor: '#4b9db7', width: '27%', height: '16%', position: 'absolute', top: 70 }} >
        <TouchableOpacity onPress={() => navigation.navigate('EditarCadastro')}>
          <ImageBackground source={require("./assets/user.png")} style={{ width: '100%', height: '100%' }}>
            <Text style={styles.letra_a}>             </Text>
            <Text style={styles.letra_a}>             </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <Text style={{ position: 'relative', top: -122, fontSize: 15 }}>Editar Cadastro</Text>
      <View style={{ borderWidth: 3, borderRadius: 85, borderColor: '#4b9db7', width: '30%', height: '18%', position: 'absolute', top: 210, }} >
        <TouchableOpacity onPress={() => navigation.navigate('Catalogo')}>
          <ImageBackground source={require("./assets/catalogo.png")} style={{ width: '100%', height: '100%' }}>
            <Text style={styles.letra_a}>             </Text>
            <Text style={styles.letra_a}>             </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <Text style={{ position: 'relative', fontSize: 15, top: 10 }}>Catálogo</Text>
      <View style={{ borderWidth: 3, borderRadius: 85, borderColor: '#4b9db7', width: '30%', height: '18%', position: 'absolute', top: 370, }} >
        <TouchableOpacity onPress={() => navigation.navigate('Pagamento')}>
          <ImageBackground source={require("./assets/pagar.png")} style={{ width: '100%', height: '100%' }}>
            <Text style={styles.letra_a}>             </Text>
            <Text style={styles.letra_a}>             </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <Text style={{ position: 'relative', fontSize: 15, top: 150 }}>Formas de Pagamento</Text>
      <View style={{ borderWidth: 2, borderColor: '#4b9db7', backgroundColor: '#81b2c1', justifyContent: 'center', position: 'absolute', width: '105%', height: '15%', bottom: 0, }}>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> Gelinhu's Commerce 🧊</Text>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> All rights reserved ©️</Text>

      </View>
    </View>
  );
}

function Catalogo({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Catalogo</Text>
      <View style={{ borderWidth: 3, borderRadius: 85, borderColor: '#4b9db7', width: '30%', height: '18%', position: 'absolute', top: 20, left: 50 }} >
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ImageBackground source={require("./assets/catalogo.png")} style={{ width: '100%', height: '100%' }}>
            <Text style={styles.letra_a}>             </Text>
            <Text style={styles.letra_a}>             </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <Text style={{ position: 'relative', fontSize: 15, top: 10 }}>Catálogo</Text>
      <View style={{ margin: 5, width: 100, position: "absolute", top: 50, left: '65%' }}>
        <Button
          title="Voltar" onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '70%', height: '50%', position: 'absolute', borderWidth: 1, top: '27%' }}>
        <Image
          style={{ width: '65%', height: '65%', margin: 5, }}
          source={require("./assets/splazi.png")}
        />
        <Text style={{ margin: 0, }}>Pacote de Gelo 5kg</Text>
        <Text style={{ margin: 3, }}>R$ 20,00</Text>
        <Button
          title="Comprar" onPress={() => navigation.navigate('Comprar')}
        />
      </View>
      <View style={{ borderWidth: 2, borderColor: '#4b9db7', backgroundColor: '#81b2c1', justifyContent: 'center', position: 'absolute', width: '105%', height: '15%', bottom: 0, }}>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> Gelinhu's Commerce 🧊</Text>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> All rights reserved ©️</Text>

      </View>
    </View>
  );
}
function Comprar({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Comprar</Text>
      <View style={{ borderWidth: 3, borderRadius: 85, borderColor: '#4b9db7', width: '30%', height: '18%', position: 'absolute', top: 20, left: 50 }} >
        <TouchableOpacity onPress={() => navigation.navigate('Catalogo')}>
          <ImageBackground source={require("./assets/catalogo.png")} style={{ width: '100%', height: '100%' }}>
            <Text style={styles.letra_a}>             </Text>
            <Text style={styles.letra_a}>             </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 5, width: 100, position: "absolute", top: 50, left: '65%' }}>
        <Button
          title="Voltar" onPress={() => navigation.navigate('Catalogo')}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '70%', height: '50%', position: 'absolute', borderWidth: 1, top: '27%' }}>
        <Text style={{ margin: 5, fontSize: 20, }}>R$ 20,00</Text>
        <Image
          style={{ width: '55%', height: '45%', margin: 5, }}
          source={require("./assets/splazi.png")}
        />
        <Text style={{ margin: 3, fontSize: 15, }}>PIX - CARTÃO - DINHEIRO</Text>
        <Text style={{ margin: 5, fontSize: 15, }}>RETIRADA - DELIVERY</Text>
        <Button
          title="finalizar" onPress={() => navigation.navigate('Obrigado')}
        />
      </View>
      <View style={{ borderWidth: 2, borderColor: '#4b9db7', backgroundColor: '#81b2c1', justifyContent: 'center', position: 'absolute', width: '105%', height: '15%', bottom: 0, }}>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> Gelinhu's Commerce 🧊</Text>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> All rights reserved ©️</Text>

      </View>
    </View>
  );
}
function Obrigado({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Comprar</Text>
      <View style={{ borderWidth: 3, borderRadius: 85, borderColor: '#4b9db7', width: '30%', height: '18%', position: 'absolute', top: 20, left: 50 }} >
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ImageBackground source={require("./assets/pagar.png")} style={{ width: '100%', height: '100%' }}>
            <Text style={styles.letra_a}>             </Text>
            <Text style={styles.letra_a}>             </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 5, width: 100, position: "absolute", top: 50, left: '65%' }}>
        <Button
          title="Voltar" onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '70%', height: '50%', position: 'absolute', borderWidth: 1, top: '27%' }}>
        <Image
          style={{ width: '80%', height: '50%' }}
          source={require("./assets/icongelo.gif")}
        >

        </Image>
        <Text>Você comprou:</Text>
        <Text>Pacote de Gelo 5kg</Text>
        <Text>R$ 20,00</Text>
        <Text style={{ margin: 10, fontSize: 20, }}>Obrigado!</Text>
      </View>
      <View style={{ borderWidth: 2, borderColor: '#4b9db7', backgroundColor: '#81b2c1', justifyContent: 'center', position: 'absolute', width: '105%', height: '15%', bottom: 0, }}>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> Gelinhu's Commerce 🧊</Text>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> All rights reserved ©️</Text>

      </View>
    </View>
  );
}
function Pagamento({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pagamento</Text>
      <View style={{ borderWidth: 3, borderRadius: 85, borderColor: '#4b9db7', width: '30%', height: '18%', position: 'absolute', top: 20, left: 50 }} >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ImageBackground source={require("./assets/pagar.png")} style={{ width: '100%', height: '100%' }}>
            <Text style={styles.letra_a}>             </Text>
            <Text style={styles.letra_a}>             </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 5, width: 100, position: "absolute", top: 50, left: '65%' }}>
        <Button
          title="Voltar" onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '70%', height: '50%', position: 'absolute', borderWidth: 1, top: '27%' }}>
        <Image
          style={{ width: '70%', height: '40%' }}
          source={require("./assets/icongelo.gif")}
        >

        </Image>
        <Text>Nós aceitamos:</Text>
        <Text>- PIX</Text>
        <Text>- CARTÃO</Text>
        <Text>- DINHEIRO</Text>
        <Text style={{ margin: 10, }}>*RETIRADA E DELIVERY*</Text>
        <Button
          title="Quero comprar" onPress={() => navigation.navigate('Catalogo')}
        />
      </View>
      <View style={{ borderWidth: 2, borderColor: '#4b9db7', backgroundColor: '#81b2c1', justifyContent: 'center', position: 'absolute', width: '105%', height: '15%', bottom: 0, }}>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> Gelinhu's Commerce 🧊</Text>
        <Text style={{ color: 'white', margin: 1, paddingLeft: 20, }}> All rights reserved ©️</Text>

      </View>
    </View>
  );
}

function Products({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Produtinhos Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          title: 'Entre para comprar!',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#81b2c1' },
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#81b2c1' }
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#81b2c1' },
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: 'Products',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#81b2c1' },
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="EditarCadastro"
        component={EditarCadastro}
        options={{
          title: 'Editar Cadastro',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#81b2c1' },
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Comprar"
        component={Comprar}
        options={{
          title: 'Comprar',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#81b2c1' },
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Obrigado"
        component={Obrigado}
        options={{
          title: 'Obrigado',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#81b2c1' },
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Catalogo"
        component={Catalogo}
        options={{
          title: 'Catálogo',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#81b2c1' },
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Pagamento"
        component={Pagamento}
        options={{
          title: 'Pagamento',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#81b2c1' },
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />

    </Stack.Navigator>
  );
}
/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Itajuba234</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

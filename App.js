import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [grausC, setGrausC] = useState(0)
  const [grausK, setGrausK] = useState(0)
  const [grausF, setGrausF] = useState(0)

  function conversor() {


    if (grausC == '') {
      alert('Informe os graus Celcius corretamente')
    } else {
      setGrausK(Number(grausC) + 273)
      setGrausF((Number(grausC) * 1.8) + 32)

    }
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     
      <Text  style={styles.titulo}>Conversor de Temperatura</Text>
    
       <View style={styles.content}>
       <Text  style={styles.texto}>Digite o valor em Graus Celcius</Text>
      <TextInput placeholder='Ex. 30°' keyboardType='numeric' onChangeText={setGrausC} style={styles.input}/>
      <TouchableOpacity onPress={conversor} style={styles.botao}>
        <Text style={styles.texto}> CONVERTER</Text>
      </TouchableOpacity >
      <Text style={styles.texto}>{!grausK ? '' : 'O valor em kelvil é ' + grausK + '°K'}</Text>
      <Text style={styles.texto}>{!grausF ? '' : 'O valor em Fahrenheit é ' + grausF + '°F'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo:{
    fontSize:20,
    fontWeight:'bold',
    borderBottomWidth:1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  content:{
    flex:1,
    justifyContent:'center',
    gap:10
  },
  input:{
    borderWidth:1,
    borderRadius:3,
    padding:2
  },
  texto:{
    fontWeight:'bold'
    
  },
  botao:{
    alignItems:'center',
    backgroundColor:'yellow',
    borderRadius:10,
    padding:5
  }
});

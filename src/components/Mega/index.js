/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function Mega() {

    let [num, setNum] = React.useState();
    let [arr, setArr] = React.useState([]);

    function Generate(){
        let cont = 0;
        let array = [];

        while (cont < num){
            let numb = Math.floor(60 * Math.random() + 1);
            if (array.includes(numb)) {continue;}
            array.push(numb);
            cont++;
        }

        array.sort((a, b) => a - b);

        setArr([...array]);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.txt} >Números Aleatórios</Text>
      <TextInput style={styles.input}
      placeholder="Digite a quantidade de numeros"
      value={num}
      onChangeText={num_ => setNum(num_)}/>
      <Button title="Gerar" color="#363636" onPress={Generate} />
      <View style={styles.numContainer} >
        {parseInt(num) ? arr.map((itens, index) => <Text key={index} style={styles.arr} >{itens} </Text>) : <Text style={styles.arr} >digite apenas numeros</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84c',
    alignItems: 'center',
    padding: 30,
  },
  txt:{
      color: 'white',
      fontSize: 30,
  },
  input:{
      margin: 40,
      textAlign: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'white',
      fontSize: 20,
      color: 'white',
      padding: 10,
  },
  numContainer:{
      padding: 30,
      flexDirection: 'row',
  },
  arr:{
      padding: 5,
      color: 'white',
      fontSize: 20,
  },
});

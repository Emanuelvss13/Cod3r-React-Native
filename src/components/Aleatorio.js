/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button, TextInput} from 'react-native';

export default function Contador() {

  let [num, setNum] = React.useState(0);
  let [value, setValue] = React.useState('');

  function add(){
    setNum(num += 1);
  }

  function sub(){
    setNum(num + -1);
  }

  return (
    <SafeAreaView style={style.container}>

      <TextInput style={style.input} value={value}
      placeholder="Digite seu nome"
      onChangeText={value_ => setValue(value_)} />

      <Text style={style.textContainer}>{num}</Text>
      <Button style={style.button} title="Adicionar" onPress={add} />
      <Button style={style.button} title="Decrementar" onPress={sub} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 60,
    color: 'white',
  },
  button:{
    padding: 5,
  },
  input:{
    fontSize: 30,
    color: 'white',
  },
});

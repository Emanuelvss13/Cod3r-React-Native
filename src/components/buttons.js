/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, StyleSheet} from 'react-native';

export default () => {
  return (
    <>
      <Button style={style.button} title="Adicionar" />
    </>
  );
};

const style = StyleSheet.create({
    button:{
        color: '#84c',
    },
});

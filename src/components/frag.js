/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default () => {
    return (
        <>
            <Text style={styles.text} >Contador</Text>
        </>
    );
};

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 60,
    },
});

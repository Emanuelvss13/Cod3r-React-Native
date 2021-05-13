/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Aleatorio extends Component {

  constructor(props){
    super(props);
    this.state = {
      qtd: this.props.qtdNum,
      nums: [],
    };
  }

  generate = (props) => {
    let array = [];
    let cont = 0;

    while (cont <= this.state.qtd){
      array.push(Math.floor(10 * Math.random() + 1));
    }

    this.setState({nums: array});

  }

  render() {
    return (
      <View>
        {this.state.nums.map(itens => <Text>{itens}</Text>)}
      </View>
    );
  }
}

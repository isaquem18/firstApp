import React from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet } from 'react-native';
import Produtos from './Produtos';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
    }
  }

  render() {
    return (
      <View style={styles.produtos}>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  produtos: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  }
})

export default Home;

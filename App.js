import React from 'react';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Produtos from './src/components/Produtos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor="#66a3ff" />
        <Header />
        <ScrollView>
          <Produtos />
        </ScrollView>
      </>
    );
  }
};

const styles = StyleSheet.create({});


export default App;

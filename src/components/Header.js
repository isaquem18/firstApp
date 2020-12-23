import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/menu.png')} style={styles.menu}/>
        <Image source={require('../../assets/logo.png')} style={styles.image}/>
        <Image source={require('../../assets/lupa.png')} style={styles.lupa}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
    position: 'relative',
    top: 0,
    zIndex: 2,
    backgroundColor: 'whitesmoke',
    height: 60,
  },
  image: {
    height: 40,
    width: 100,
    backgroundColor: 'whitesmoke',
  },
  lupa: {
    width: 20,
    height: 20,
  },
  menu: {
    width: 20,
    height: 20,
  }
})

export default Header;
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

class Produto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
      id: this.props.id
    }
  }

  mais = () => {

  }

  render() {
    let foto = this.state.img;
    let key = this.state.id;
    return (
      <View style={styles.box}>
        <TouchableWithoutFeedback onPress={this.mais}>
          <View style={styles.like}>
            <Image source={require('../../assets/like.png')} style={styles.coracao}/>
          </View>
        </TouchableWithoutFeedback>
          <View style={styles.inbox}>
            <Image source={{ uri: foto }} style={styles.imagem} key={key} />
          </View>
          <View>
            <Text style={styles.infos}>R$ 120,99</Text>
          </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
          box: {
          flexDirection: 'column',
    alignItems: 'center',
    width: '46%',
    height: 180,
    marginVertical: 5,
    backgroundColor: '#a6a6a620',
    borderRadius: 10,
    shadowOffset: { width: 5, height: 5, },
    shadowColor: '#e65c00',
    shadowOpacity: 5,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#a6a6a640',
  },
  imagem: {
          width: '70%',
    height: 100,
    marginHorizontal: 10,
    overlayColor: 'hidden',
    alignSelf: 'center',
  },
  infos: {
          fontSize: 22,
    fontWeight: 'bold',
    color: '#090',
  },
  inbox: {
          width: '100%',
  },
  like: {
    width: '25%',
    height: '25%',
    backgroundColor: '#66a3ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'flex-end',
    position: 'relative',
  },
  coracao: {
    width: 26,
    height: 18,   
  }
});

export default Produto;

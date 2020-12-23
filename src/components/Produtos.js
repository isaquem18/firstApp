import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Produto from './Produto';

class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fotos: [
        'https://cdnv2.moovin.com.br/nicecalcados/imagens/produtos/det/tenis-masculino-nike-cj1670-002-air-max-fusion-d4a35d07d29795d98f3c37ad003f97db.png',
        'https://vulcabras.vteximg.com.br/arquivos/ids/174861-1000-1000/43455789_1-312_img1.png?v=637278493724100000',
        'https://vulcabras.vteximg.com.br/arquivos/ids/172565-1000-1000/43385777_1-925_img1.png?v=637255186397830000',
        'https://static.fatimaesportes.com.br/public/fatimaesportes/imagens/produtos/tenis-nike-air-zoom-pegasus-36-5595.png',
        'https://varejaopaulista.com/wp-content/uploads/2020/05/1.png',
        'https://vipjeans.com.br/wp-content/uploads/2020/05/esse.png',
        'https://vulcabras.vteximg.com.br/arquivos/ids/172559-1000-1000/43385777_1-164_img1.png?v=637255169468830000',
        'https://cdnv2.moovin.com.br/nicecalcados/imagens/produtos/det/tenis-masculino-nike-cj1670-002-air-max-fusion-d4a35d07d29795d98f3c37ad003f97db.png',
        'https://vulcabras.vteximg.com.br/arquivos/ids/174861-1000-1000/43455789_1-312_img1.png?v=637278493724100000',
        'https://vulcabras.vteximg.com.br/arquivos/ids/172565-1000-1000/43385777_1-925_img1.png?v=637255186397830000',
        'https://static.fatimaesportes.com.br/public/fatimaesportes/imagens/produtos/tenis-nike-air-zoom-pegasus-36-5595.png',
        'https://varejaopaulista.com/wp-content/uploads/2020/05/1.png',
        'https://vipjeans.com.br/wp-content/uploads/2020/05/esse.png',
        'https://vulcabras.vteximg.com.br/arquivos/ids/172559-1000-1000/43385777_1-164_img1.png?v=637255169468830000',
        'https://cdnv2.moovin.com.br/nicecalcados/imagens/produtos/det/tenis-masculino-nike-cj1670-002-air-max-fusion-d4a35d07d29795d98f3c37ad003f97db.png',
        'https://vulcabras.vteximg.com.br/arquivos/ids/174861-1000-1000/43455789_1-312_img1.png?v=637278493724100000',
        'https://vulcabras.vteximg.com.br/arquivos/ids/172565-1000-1000/43385777_1-925_img1.png?v=637255186397830000',
        'https://static.fatimaesportes.com.br/public/fatimaesportes/imagens/produtos/tenis-nike-air-zoom-pegasus-36-5595.png',
        'https://varejaopaulista.com/wp-content/uploads/2020/05/1.png',
        'https://vipjeans.com.br/wp-content/uploads/2020/05/esse.png',
        'https://vulcabras.vteximg.com.br/arquivos/ids/172559-1000-1000/43385777_1-164_img1.png?v=637255169468830000',
        'https://cdnv2.moovin.com.br/nicecalcados/imagens/produtos/det/tenis-masculino-nike-cj1670-002-air-max-fusion-d4a35d07d29795d98f3c37ad003f97db.png',
        'https://vulcabras.vteximg.com.br/arquivos/ids/174861-1000-1000/43455789_1-312_img1.png?v=637278493724100000',
        'https://vulcabras.vteximg.com.br/arquivos/ids/172565-1000-1000/43385777_1-925_img1.png?v=637255186397830000',
        'https://static.fatimaesportes.com.br/public/fatimaesportes/imagens/produtos/tenis-nike-air-zoom-pegasus-36-5595.png',
        'https://varejaopaulista.com/wp-content/uploads/2020/05/1.png',
        'https://vipjeans.com.br/wp-content/uploads/2020/05/esse.png',
        'https://vulcabras.vteximg.com.br/arquivos/ids/172559-1000-1000/43385777_1-164_img1.png?v=637255169468830000',
        'https://cdnv2.moovin.com.br/nicecalcados/imagens/produtos/det/tenis-masculino-nike-cj1670-002-air-max-fusion-d4a35d07d29795d98f3c37ad003f97db.png',
        'https://vulcabras.vteximg.com.br/arquivos/ids/174861-1000-1000/43455789_1-312_img1.png?v=637278493724100000',
        'https://vulcabras.vteximg.com.br/arquivos/ids/172565-1000-1000/43385777_1-925_img1.png?v=637255186397830000',
        'https://static.fatimaesportes.com.br/public/fatimaesportes/imagens/produtos/tenis-nike-air-zoom-pegasus-36-5595.png',
        'https://varejaopaulista.com/wp-content/uploads/2020/05/1.png',
        'https://vipjeans.com.br/wp-content/uploads/2020/05/esse.png',
        'https://vulcabras.vteximg.com.br/arquivos/ids/172559-1000-1000/43385777_1-164_img1.png?v=637255169468830000',
      ]
    }
  }

  render() {
    return (
      <View style={styles.produtos}>
        {this.state.fotos.map((item, index) => { 
      return <Produto img={item} chave={index} key={index}/>;
    })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  produtos: {
    backgroundColor: 'blue',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    height: '100%',
  },
});

export default Produtos;

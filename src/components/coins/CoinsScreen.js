import React, {Component} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

class CoinsScreen extends Component {

  handlePress = () =>{
    console.log('go to detail', this.props);

    //--- para poder navegar a la pantalla
    this.props.navigation.navigate('CoinDetail');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Coins Screen</Text>
        <Pressable style={styles.btn} onPress={this.handlePress}>
          <Text style={styles.btnText}>Ir a detail</Text>
        </Pressable>
      </View>
    );
  }
}

//--- Para los estilos del boton ---///
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'yellow',
    
  },
  titleText: {
    color: 'black',
    textAlign: 'center'
  },
  btn: {
    padding: 8,
    backgroundColor: "pink",
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center'
  }
});


export default CoinsScreen;

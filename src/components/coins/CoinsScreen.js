import React, {Component} from 'react';
import {View, FlatList,Text,ActivityIndicator, Pressable, StyleSheet} from 'react-native';
import  Http from '../../libs/http';
import CoinsItem from './CoinsItem';
import Colors from '../../res/colors';

class CoinsScreen extends Component {

  state = {
    coins: [],
    loading: false
  }

  componentDidMount  = async () =>{

    this.setState({ loading: true })

    //--- recibo lo que la API me trajo --//
    const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
      //console.log("coins: ",coins);

    //--- se lo seteo al estado ---//
    this.setState({ coins: res.data, loading: false })
  }

  handlePress = (coin) =>{
    //console.log('go to detail', this.props);

    //--- para poder navegar a la pantalla
    //--- le paso a la otra pantalla la moneda ---//
    this.props.navigation.navigate('CoinDetail', { coin });
  }

  render() {
    const { coins, loading } = this.state;

    return (
      <View style={styles.container}>
        { loading ? 
        <ActivityIndicator 
          style={ styles.loader }      
          color='blanck' 
          size='large' 
        />
          : null
        }
        <FlatList
          data={ coins }
            renderItem={({ item }) => 
            <CoinsItem item={item} 
            onPress={ () => this.handlePress(item)} 
          />
            }
         />
      </View>
    );
  }
}

//--- Para los estilos del boton ---///
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.charade,
    
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
  },
  loader:{
    marginTop: 60
  }
});


export default CoinsScreen;

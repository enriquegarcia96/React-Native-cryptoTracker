import React, { Component } from 'react';
import { TextInput, Platform, View, StyleSheet, Image } from  'react-native';
import Colors  from '../../res/colors';


class CoinsSearch extends Component {

    //--- estado vacio para guardar los cambios ---//
    state = {
        query: ''
    }

    handleText = ( query ) =>{

        this.setState({ query });

        if (this.props.onChange) {
            this.props.onChange(query);
        }
    }

    render(){

        const { query } = this.state;

        return(
            <View>
                <View style={  styles.buscador }>
                    <Image style={ styles.imgBuscador } source={ require('../../assets/buscador.png') } />
                    <TextInput 
                        style={[ 
                            styles.textInput, 
                            Platform.OS == 'ios' ?
                            styles.textInputIos :
                            styles.textInputAndroid
                        ]}
                        onChangeText={ this.handleText }
                        value={ query }
                        placeholder='Buscador de Monedas...'
                        placeholderTextColor='#fff'
                    />
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    textInput: {
        height: 46,
        backgroundColor: Colors.charade,
        paddingLeft: 16,
        paddingRight: 160,
        color: '#fff',
        
    },
    textInputAndroid:{
        borderBottomWidth: 4,
        borderBottomColor: Colors.zircon,
        
        
    },
    textInputIos:{
        margin: 8,
        borderRadius: 8
    }, 
    buscador:{
        flexDirection: 'row',
    }, 
    imgBuscador:{
        marginTop: 13,
        width: 30,
        height: 30
    }
})

export default CoinsSearch;
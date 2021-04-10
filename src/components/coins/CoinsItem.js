import React from 'react';
import { View, Text,Image,Pressable, StyleSheet, Platform } from 'react-native';
import  Colors  from '../../res/colors'


const CoinsItem = ({ item, onPress }) =>{

    //--- define cual flecha nos va a devolver ---//
    const getImgArrow = () => {
        if (item.percent_change_1h > 0) {
            return require('../../assets/up-arrow.png');
        }else{
            return require('../../assets/down-arrow.png');
        }
    }

    return(

        <Pressable onPress={ onPress } style={styles.container}> 

            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.symbol}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.percentText}>{item.percent_change_1h}</Text>
                <Image 
                    style={ styles.imgIcon }
                    source={getImgArrow()}
                />
            </View>

        </Pressable>
    );
}


//--- creo los estilos ---//
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomColor: Colors.zircon,
        borderBottomWidth: 1,
        paddingLeft: Platform.OS == 'ios' ? 0 : 16,
        marginLeft: Platform.OS == 'ios' ? 16 : 0

    },
    row: {
        flexDirection:'row'
    },
    symbolText: {
        color: '#fff',
        //fontWeight: 'bold',
        fontSize: 16,
        marginRight: 12,
        fontFamily: 'DelaGothicOne-Regular'
    },
    nameText: {
        color: '#fff',
        fontSize: 18,
        marginRight: 16,
        fontFamily: 'Inconsolata-VariableFont_wdth,wght'
    },
    percentText: {
        color: '#fff',
        fontSize: 14,
        marginRight: 8
    },
    priceText:{
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Inconsolata-VariableFont_wdth,wght'
    },
    imgIcon: {
        width: 22,
        height: 22
    }

})

export default CoinsItem;
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FavoriteEmptyState from './FavoriteEmptyState';
import Colors from '../../res/colors';


class FavoritesScreen extends Component {


    render(){
        return(
            <View style={styles.container}>
                <FavoriteEmptyState />
            </View>

        )
    }
}



const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.charade,
        flex: 1
    }

})

export default FavoritesScreen;
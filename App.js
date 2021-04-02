import React from 'react';

//--- Contenedor de navegacion ---//
import {NavigationContainer} from '@react-navigation/native';
import { Image } from 'react-native';
import CoinsStack from './src/components/coins/CoinsStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './src/res/colors';
import FavoritesScreen from './src/components/favorites/FavoritesStack';


const Tabs = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: '#fefefe',
          style: {
            backgroundColor: Colors.blackPearl
          }
        }}
      >
          <Tabs.Screen 
            name="Coins"
            component={ CoinsStack }
            options={{
              tabBarIcon: ({ size, color }) => (
                <Image 
                  style={{ tintColor: color, width: size, height: size }}
                  source={require('./src/assets/bankrupt.png')} 
                />
              )
            }}
          />

          <Tabs.Screen 
            name="Favorites"
            component={ FavoritesScreen }
            options={{
              tabBarIcon: ({ size, color }) => (
                <Image 
                  style={{ tintColor: color, width: size, height: size }}
                  source={require('./src/assets/star.png')} 
                />
              )
            }}
          />

      </Tabs.Navigator>
    </NavigationContainer>
    );
};


export default App;

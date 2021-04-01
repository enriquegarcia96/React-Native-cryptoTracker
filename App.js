import React from 'react';

//--- Contenedor de navegacion ---//
import {NavigationContainer} from '@react-navigation/native';

import CoinsStack from './src/components/coins/CoinsStack';
import CoinDetailScreen from './src/components/coins/CoinDetailScreen';

const App = () => {
  return (
    <NavigationContainer>
      <CoinsStack />
    </NavigationContainer>
    );
};


export default App;

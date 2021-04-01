import React from 'react';

//--- Contenedor de navegacion ---//
import {NavigationContainer} from '@react-navigation/native';

import CoinsStack from './src/components/coins/CoinsStack';


const App = () => {
  return (
    <NavigationContainer>
      <CoinsStack />
    </NavigationContainer>
    );
};


export default App;

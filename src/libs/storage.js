//*--- LIBRERIA STORAGE ---//

import AsyncStorage from '@react-native-community/async-storage';

class Storage{

    static instance = Storage();

    store = async (key, value) =>{

        try {

            await AsyncStorage.setItem(key, value);

            return true;

        } catch (error) {
            console.log('storage store error',error);

            return false;
        }
    }


    get = async (key) =>{
        try {

            return await AsyncStorage.getItem(key);

        } catch (error) {
            console.log("storage get error", error);
            throw Error(error);
        }
    }


    //--- Devuelve toda la lista de lo que queramos ---//
    //--- KEYS es un Array ---//
    multiGet = async( keys ) =>{
        try {
            
            return await AsyncStorage.multiGet(keys);

        } catch (error) {
            console.log('Storage multiGet error', error);

            throw Error(error);
        }
    }

    getAllkeys = async () =>{

        try {

            return await AsyncStorage.getAllKeys();// devuelve todas las keys que he guardado

        } catch (error) {
            console.log('Storage GetAllkeys', error)
            throw Error(error);
        }

    }


    remove = async ( key ) => {

        try {

            await AsyncStorage.removeItem(key);
            return true;           
        } catch (error) {
            console.log('Store remove error', error);
            return false;
        }

    }

}
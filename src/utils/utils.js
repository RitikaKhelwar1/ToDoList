import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(`add_data`, jsonValue)
      return jsonValue
    } catch (e) {
      console.log("add_data store error")
    }
  }


 export const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(`add_data`)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log("add_data get error")
    }
  }

  export const storeLogin = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(`login_data`, jsonValue)
      return jsonValue
    } catch (e) {
      console.log("login_data store error")
    }
  }


 export const getLogin = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(`login_data`)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log("login_data get error")
    }
  }

  export const removeLoginData = async() =>{
    try {
        await AsyncStorage.removeItem(`login_data`)
    } catch (error) {
      
    }
  }



  
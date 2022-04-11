import React from 'react'
import {View,Text,TextInput,SafeAreaView} from 'react-native'
import { Provider } from 'react-redux'
import Routes from './src/Navigation/Routes'
import store from './src/Redux/store'




function App() {
  return (
        <Provider store={store}>

          <Routes/>
        </Provider>
  
  )
}

export default App
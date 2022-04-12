import React from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import Routes from './src/Navigation/Routes'
import store from './src/Redux/store'




function App() {

  const arr = [
    {
      id:1,
      name:"bnm",
      roll:12345678,
      age:12
    },
    {
      id:2,
      name:"fghj",
      roll:234567,
      age:43
    }
  ]

  newArr = arr.map((element)=>{
    if(element.id===1){
      return(
        {...arr[0],name:"anshu"}
      )
    }
    // else{
    //   console.log("sfjgkjhkjhikuh")
    // }
  })
  console.log(...newArr)



  return (
    <Provider store={store}>

      <Routes />
    </Provider>


)
}

export default App





// --------how to push objects into array--------->

// const args = [{
//   num: 1,
//   roll :20,
//   name: "anshu"
// }]

// console.log([...args,{num:"chd",city:"gy"}])

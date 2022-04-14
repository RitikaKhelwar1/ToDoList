import React ,{useEffect} from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import Routes from './src/Navigation/Routes'
import store from './src/Redux/store'
import types from './src/Redux/types'
import { getData } from './src/utils/utils'


const {dispatch} = store


function App() {


useEffect(()=>{
    getData().then((res)=>{
      console.log("store data",res)
      if(!!res){
        dispatch({
          type: types.CREATE_TODOITEMS,
          payload: res
        })
      }
    })
},[])

  return (
    <Provider store={store}>

      <Routes />
    </Provider>



)
}

export default App














// const arr = [
//   {
//     id:1,
//     name:"bnm",
//     roll:12345678,
//     age:12
//   },
//   {
//     id:2,
//     name:"fghj",
//     roll:234567,
//     age:43
//   }
// ]

//  const newArr = arr.map((element)=>{
//   if(element.id===1){
//     return(
//       {...element,name:"chd",city:"gy"}
//     )
//   }
//   else{
//     return(
//       {...element}
//     )
//   }
// })

// console.log(newArr)

// --------how to push objects into array--------->

// const args = [{
//   num: 1,
//   roll :20,
//   name: "anshu"
// }]

// console.log([...args,{num:"chd",city:"gy"}])

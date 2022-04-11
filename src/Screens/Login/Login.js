import React, {useState} from 'react'
import {View,Text,TextInput,Button,SafeAreaView} from 'react-native'
import styles from '../../Styles/styles'
import colors from '../../Styles/colors'
import MyButton from '../../Components/MyButton'
import TextInputComponent from '../../Components/TextInputComponent'
import Styles from '../AddDetails/styles'
import {login} from '../../Redux/actions'
import { useDispatch } from 'react-redux'


function Login() {
  const dispatch = useDispatch()

  const [name, setname] = useState('')
  const [phone, setphone] = useState('')

  const handleName =(event) =>{
    setname(event)
  }

  const handlePhone =(event) =>{
    
    setphone(event)
  }

  const loging=()=>{
    if(name.length===0){alert("Please Enter User Name")}
    else if(phone.length===0){alert("Please Enter Phone Name")}
    if(phone.length!=0){dispatch(login())}
  }

  return (
    <SafeAreaView style={styles.MainContainer}>
      <Text style={styles.loginText}>Enter The Login Details</Text>
        <TextInputComponent placeholder={'Enter Name'}
        placeholderTextColor={colors.orange} onchangeText={handleName} ></TextInputComponent>
         <TextInputComponent placeholder={'Enter Phone No.'}
        placeholderTextColor={colors.orange} onchangeText={handlePhone} ></TextInputComponent>
        <MyButton text = "Login" onpress={loging} btncolor={Styles.btnstyle} />
    </SafeAreaView>
  )
}

export default Login
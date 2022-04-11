import React, { useState } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native'
import TextInputComponent from '../../Components/TextInputComponent'
import colors from '../../Styles/colors'
import navigationStrings from '../../Navigation/navigationStrings'
import { useDispatch } from 'react-redux'
import types from '../../Redux/types'
import MyButton from '../../Components/MyButton'
import Styles from '../AddDetails/styles'

function AddDetails({ navigation }) {
  const [name, setname] = useState('')
  const [roll, setroll] = useState('')
  const [age, setage] = useState('')
  const [address, setaddress] = useState('')
  const [phone, setphone] = useState('')

  const dispatch = useDispatch()

  const handleName = (event) =>{
    setname(event)
  }
  const handleRollNumber =(event) =>{
    
    setroll(event)
  }
  const handleAge = (event) =>{
    
    setage(event)
  }
  const handlePhoneNumber = (event) =>{
    
    setphone(event)
  }
  
  const handleAddress = (event) =>{
    
    setaddress(event)
  }
  
  const handleAddBtn = () => {
    
    dispatch({
      type: types.CREATE_TODOITEMS,
      item: {
        name: name,
        address: address,
        phone: phone,
        age: age,
        roll: roll
      }
    })
    if(name.length===0){
      alert("Set User Name")
    }
    else if(roll.length===0){
      alert("Set User roll Number")
    }
    else if(age.length===0){
      alert("Set User age")
    }
    else if(phone.length===0){
      alert("Set User Phone number")
    }
    else if(address.length===0){alert("Enter User Address")}
    if(address.length!=0){navigation.navigate(navigationStrings.HOME)}
  }


  return (
    <View style={{ justifyContent: "center" }}>
      <TextInputComponent
        placeholder={'Enter Name'}
        placeholderTextColor={colors.orange}
        onchangeText={handleName}
      />
      <TextInputComponent
        placeholder={'Enter Roll No.'}
        placeholderTextColor={colors.orange}
        onchangeText={handleRollNumber}
      />
      <TextInputComponent
        placeholder={'Enter Age'}
        placeholderTextColor={colors.orange}
        onchangeText={handleAge}
      />
      <TextInputComponent
        placeholder={'Enter Phone Number'}
        placeholderTextColor={colors.orange}
        onchangeText={handlePhoneNumber}
      />
      <TextInputComponent
        placeholder={'Enter Address'}
        placeholderTextColor={colors.orange}
        onchangeText={handleAddress}
      />
      <MyButton text = "Add" onpress={handleAddBtn} btncolor={Styles.btnstyle} />
    </View>

  )
}

export default AddDetails
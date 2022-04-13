import React, { useState ,useEffect} from 'react'
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native'
import TextInputComponent from '../../Components/TextInputComponent'
import colors from '../../Styles/colors'
import navigationStrings from '../../Navigation/navigationStrings'
import { useDispatch } from 'react-redux'
import types from '../../Redux/types'
import MyButton from '../../Components/MyButton'
import Styles from '../AddDetails/styles'
import {createToDoItems,editToDoItems} from '../../Redux/actions/index'

function AddDetails({ navigation , route}) {
  // console.log("routes",route)
  const items = route?.params?.items
  // console.log("id",id)
  const submitType = route?.params?.submitType


  const [name, setname] = useState('')
  const [roll, setroll] = useState('')
  const [age, setage] = useState('')
  const [address, setaddress] = useState('')
  const [phone, setphone] = useState('')

  const dispatch = useDispatch();

  const userId = Math.floor(Math.random()*1000);

  useEffect(() => {
    if(items){
      setname(items?.name)
      setroll(items?.roll)
      setage(items?.age)
      setaddress(items?.address)
      setphone(items?.phone)
    }
  }, [items])
  


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


  const Editdetails=()=>{
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

    else if(address.length===0)
    {
      alert("Enter User Address")
    }

    else if(address.length!=0){
      dispatch(editToDoItems({id:items.userId,name,phone,address,age,roll})),
      navigation.navigate(navigationStrings.HOME)
    }

  }
  
  const handleAddBtn = () => {
    
    
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
    else if(address.length!=0){
      dispatch(createToDoItems({userId,name,phone,address,age,roll})),
         
      
      navigation.navigate(navigationStrings.HOME)}
  }


  return (
    <View style={{ justifyContent: "center" }}>
      <TextInputComponent
        placeholder={'Enter Name'}
        placeholderTextColor={colors.orange}
        myValue={name}
        onchangeText={handleName}
      />
      <TextInputComponent
        placeholder={'Enter Roll No.'}
        placeholderTextColor={colors.orange}
        myValue={roll}
        onchangeText={handleRollNumber}
      />
      <TextInputComponent
        placeholder={'Enter Age'}
        placeholderTextColor={colors.orange}
        myValue={age}
        onchangeText={handleAge}
      />
      <TextInputComponent
        placeholder={'Enter Phone Number'}
        placeholderTextColor={colors.orange}
        myValue={phone}
        onchangeText={handlePhoneNumber}
      />
      <TextInputComponent
        placeholder={'Enter Address'}
        placeholderTextColor={colors.orange}
        myValue={address}
        onchangeText={handleAddress}
      />
      {(() => {
        if (submitType === 'Edit') {
          return (
            <MyButton text = "Update" onpress={Editdetails} btncolor={Styles.btnstyle} />
            );
          }
          return (
          <MyButton text = "Add" onpress={handleAddBtn} btncolor={Styles.btnstyle} />
        );
      })()}
    </View>

  )
}

export default AddDetails
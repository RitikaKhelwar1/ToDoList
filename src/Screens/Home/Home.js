import React from 'react'
import { View, Text, TextInput, Button, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import styles from '../../Styles/styles'
import navigationStrings from '../../Navigation/navigationStrings'
import ImagePath from '../../Constants/ImagePath'
import Styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import colors from '../../Styles/colors'
import { logout, deleteToDoItems, editToDoItems } from '../../Redux/actions/index'
import types from '../../Redux/types'


function Home({ navigation, }) {
  const add = "To add details Click on the + button"

  const dispatch = useDispatch()

  const todoListDetails = useSelector((state) => state.AddTask.todoItems)



  const handleSubmitBtn = () => {
    navigation.navigate(navigationStrings.ADD_DETAILS)
  }

  return (

    <SafeAreaView style={{ flex: 1,}}>
      <View style={Styles.MainCont}>
        <View style={Styles.LogOut}>
          <TouchableOpacity onPress={() => dispatch(logout())}><Text style={Styles.LogOutText}>LogOut</Text></TouchableOpacity></View>
      </View>
      {/* ---------------------cards for the details---------------------- */}
      <ScrollView>
        {todoListDetails.map((items, index) => {
          return (
            <View style={Styles.todoListContainer} key={index}>
              <View style={Styles.todoList}>
                <Text style={Styles.todoListText}>Name : {items.name}</Text>
                <Text style={Styles.todoListText}>Address : {items.address}</Text>
                <Text style={Styles.todoListText}>Phone No. : {items.phone}</Text>
                <Text style={Styles.todoListText}>Age : {items.age}</Text>
                <Text style={Styles.todoListText}>Roll No. : {items.roll} </Text>
              </View>
              {/* ---------buttons to update and delete the user details------------ */}
              <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.ADD_DETAILS, { items, submitType: 'Edit' })}><Text style={Styles.Text1}>Edit</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(deleteToDoItems(items.userId))} ><Text style={Styles.Text1}>Delete</Text></TouchableOpacity>
              </View>
              {/* -------------------------------------------------------------------- */}
            </View>
          )
        })
        }

        {/* ------------------Home Component------------------------------------------ */}
        {todoListDetails.length === 0 ? <TouchableOpacity
          onPress={handleSubmitBtn}>
          <Image source={ImagePath.PlusImg} style={Styles.PlusBtn1} ></Image>
          <Text style={Styles.Text1} >{add}</Text>
        </TouchableOpacity> : null
        }

      </ScrollView>
      {/* --------------------------------------------------------------------- */}
      <View style={{ justifyContent: "center" }}>
        {todoListDetails.length > 0 ?
          <TouchableOpacity onPress={handleSubmitBtn}>
            <Image source={ImagePath.PlusImg} style={Styles.PlusBtn} ></Image>
          </TouchableOpacity> : null
        }</View>


    </SafeAreaView>
  )
}

export default Home
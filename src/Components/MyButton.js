import React from 'react'
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'

function MyButton({
    text="",
    backgroundcolor="orange",
    onpress={},
    btncolor=''
  
}) {
    
  return (
      
    <TouchableOpacity onPress={onpress}>
        <View style={btncolor}>
        <Text style={styles.text} >{text}</Text>
       </View>
    </TouchableOpacity>
  )
}

export default MyButton


const styles = StyleSheet.create({
   text:{
        fontSize:20
    }
})
import React from "react"
import {Text,View,StyleSheet,Image,TextInput} from  'react-native'
import colors from '../../src/Styles/colors'


const TextInputComponent = ({
    placeholder = '',
    placeholderTextColor = '',
    onchangeText={},
    myValue,
}) => {
    return (
        <View style={styles.viewcss}>

            <View style={styles.container}>
                <TextInput placeholder={placeholder} onChangeText={onchangeText} placeholderTextColor={placeholderTextColor} style={styles.inputtext} value={myValue}/>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       
        marginVertical:10,
        marginLeft:5,
       flex:1

       
    },

    image: {
        height: 30,
        width: 30,
        margin: 5,

    },
    viewcss: {
        flexDirection: "row",
        marginHorizontal: 5,
        marginVertical: 10,
        borderColor: colors.blackOpacity43,
        borderWidth: 2,
        borderRadius:5
        // flex: 1

    },
    inputtext: {
        // flex: 0.9,
        // paddingVertical: 10,
        // paddingLeft: 10
    },

})

export default TextInputComponent
import {StyleSheet} from 'react-native'
import colors from './colors'


export default styles = StyleSheet.create({
    MainContainer:{

        justifyContent:"center",
        flex:1,
       
    },
    loginContainer2:{
        flexDirection:"row",
        marginBottom:20,
        justifyContent:"flex-end"

    },
    InputBox:{
        borderColor:"grey",
        borderWidth:2,
        borderRadius:5,
    
    },
    loginText:{
        fontSize:20,
        fontWeight:"bold",
        color :colors.DarkBlue,
        textAlign:"center"


    }

})
import {StyleSheet} from 'react-native'
import colors from './colors'
import {moderateScale,moderateScaleVertical,textScale} from './responsiveSize'


export default styles = StyleSheet.create({
    MainContainer:{

        justifyContent:"center",
        flex:1,
       
    },
    loginContainer2:{
        flexDirection:"row",
        marginBottom:moderateScaleVertical(20),
        justifyContent:"flex-end"

    },
    InputBox:{
        borderColor:"grey",
        borderWidth:moderateScale(2),
        borderRadius:5,
    
    },
    loginText:{
        fontSize:textScale(20),
        fontWeight:"bold",
        color :colors.DarkBlue,
        textAlign:"center"


    }

})
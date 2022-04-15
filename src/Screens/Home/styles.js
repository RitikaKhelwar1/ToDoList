import { StyleSheet } from "react-native";
import colors from "../../Styles/colors";
import {moderateScale,moderateScaleVertical,textScale} from "../../Styles/responsiveSize"

export default styles = StyleSheet.create({
    PlusBtn:{
        height:moderateScale(70),
        width:moderateScale(70),
        alignSelf:"flex-end",
        marginRight:moderateScale(15),
        marginBottom:moderateScale(10)
        
        
    },
    PlusBtn1:{
      height:moderateScale(40),
      width:moderateScale(40),
      alignSelf:"center",
      marginTop:moderateScaleVertical(300)
      
      
  },
    Text1:{
        fontSize:textScale(17),
        marginTop:moderateScaleVertical(10),
        textAlign: "center",
        marginHorizontal:5
        
        
    },
    todoListText: {
        color: "black",
        fontSize: 15,
        marginVertical: 2,
        fontWeight: '500',
        marginLeft:10
      },
      todoListContainer: {
        justifyContent: 'center',
        borderWidth:1,
        borderColor:colors.orange,
        marginHorizontal:25,
        marginVertical:10,
        borderRadius:10,
        shadowColor:colors.orange,
        shadowOpacity:0.5
        // flex:0.8
      },
      todoList:{
        backgroundColor:colors.greyColor3,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
      
      },
      MainCont:{
        flexDirection:"row",
        justifyContent:"space-between"
      },
      LogOut:{
        justifyContent:"center",
      },
      LogOutText:{
        fontSize:textScale(18),
        color:colors.orange,
        fontWeight:"bold",
        marginLeft:moderateScaleVertical(10),
        marginVertical : moderateScaleVertical(10)
      }
      

})
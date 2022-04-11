import { StyleSheet } from "react-native";
import colors from "../../Styles/colors";

export default styles = StyleSheet.create({
    PlusBtn:{
        height:40,
        width:40,
        alignSelf:"flex-end",
        marginRight:15,
        
        
    },
    PlusBtn1:{
      height:40,
      width:40,
      alignSelf:"center",
      margin:15
      
      
  },
    Text1:{
        fontSize:20,
        marginTop:10,
        textAlign: "center",
        
    },
    todoListText: {
        color: colors.orangeB,
        fontSize: 15,
        marginVertical: 8,
        fontWeight: '500',
        marginLeft:10
      },
      todoListContainer: {
        justifyContent: 'center',
        borderWidth:2,
        borderColor:colors.DarkBlue,
        marginHorizontal:25,
        marginVertical:10,
        borderRadius:10,
        // flex:0.8
      },
      MainCont:{
        borderBottomColor:colors.DarkBlue,
        borderBottomWidth:2,
        flexDirection:"row",
        justifyContent:"space-between"
      },
      LogOut:{
        justifyContent:"center",
      },
      LogOutText:{
        fontSize:18,
        color:colors.blue,
        fontWeight:"bold"
      }
      

})
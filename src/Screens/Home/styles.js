import { StyleSheet } from "react-native";
import colors from "../../Styles/colors";

export default styles = StyleSheet.create({
    PlusBtn:{
        height:70,
        width:70,
        alignSelf:"flex-end",
        marginRight:15,
        marginBottom:10
        
        
    },
    PlusBtn1:{
      height:40,
      width:40,
      alignSelf:"center",
      margin:15
      
      
  },
    Text1:{
        fontSize:17,
        marginTop:10,
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
        fontSize:18,
        color:colors.orange,
        fontWeight:"bold",
        marginLeft:10
       
      }
      

})
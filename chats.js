import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import { FlatList, TouchableOpacity } from 'react-native-web'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import Data from "../chatdata"

const chats = () => {
  const[chat,setChat]=useState(Data);
  useEffect(()=>{
      setChat(Data)
  })

  return (
    <View style={styles.container}> 

      <FlatList
           data={chat}
           keyExtrator={(item)=>item.id.toString()}
            renderItem={({item})=>(
                <View style={styles.chatContainer}> 
                     <Image source={require('../assets/sunder.jpg')} style={styles.image}/>
                 <View style={styles.chatContent}>
                  <View style={styles.chatHeader}>
                       <Text style={styles.chatName}>{item.name}</Text>
                       <Text style={styles.chatTime}>{item.time}</Text>
                 </View>
                 <View style={styles.Message}>
                     <Text style={styles.chatMessage} >{item.lastMssage}</Text>  
                      {item.totalUnread > 0 && (
                <View style={styles.unreadContainer}>
                      <Text style={styles.totalUnread}>{item.totalUnread}</Text> 
                 </View>
                )}
            </View>
            </View>
          </View>
        

     
           
        )}
      />
      <TouchableOpacity
       style={styles.chatButton}
       onPress={()=>('#')}>
       <MaterialCommunityIcons name='android-messages' size={24} color='white'/>
      </TouchableOpacity>
    </View>
  )
}

export default chats

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:16,
  },
    chatContainer:{
      flexDirection:'row',
      marginRight:16,
      marginLeft:16,
    },
    image:{
      width:50,
      height:50,
      backgroundColor:'#128c7',
      borderRadius:25,
      alignItems:"center",
      justifyContent:'center',

    },
    chatContent:{
      flex:5,
      borderBottomWidth:0,
      marginLeft:16,
      paddingBottom:16,
      marginBottom: 13,
    },
    chatHeader:{
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:"center",
      marginBottom:2,
      marginTop: 4,
    },
    chatName:{
      fontSize:16,
      fontWeight:'bold',
    },
    chatTime:{
      fontSize:18,
      color:"#A0A09E"
    },
    Message:{
      flexDirection:'row',
      justifyContent:"space-between"
    },
    chatMessage:{
      fontSize:14,
      color:'#A0A09E',
      width:'90%'
    },
    unreadContainer:{
      height:20,
      width:25,
      borderRadius:20,
      backgroundColor:'#25D366',
      alignItems:'center',
      justifyContent:'center'
    },
    totalUnread:{
      fontSize:10,
      color:'#fff',
      fontWeight:'600',

    },
    chatButton:{
      position:'absolute',
      bottom:30,
      right:20,
      borderRadius:30,
      alignItems:'center',
      justifyContent:'center',
      width:60,
      height:60,
      backgroundColor:'#0e806a',
    }

})
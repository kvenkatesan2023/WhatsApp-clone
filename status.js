import { StyleSheet, Text, View ,FlatList,TouchableOpacity,Image} from 'react-native'
import React,{useEffect,useState} from 'react'
import {FontAwesome5} from  'react-native-vector-icons';
import SData from "../data/statusdata";

const status = () => {
  const[sts,setSts]=useState(SData);

  useEffect(()=>{
     setSts(SData);
  },[])
  const combinedStatusData = [
    {'title':'Recent updates',data:sts.filter(item=>item.Viewed===false)},
    {'title':'Viwed updates',data:sts.filter(item=>item.Viewed===true)},
  ]

  return (
    <View style={styles.container} >
      <View style={styles.myStatusContainer}>
        <View>
          <Image source={require('../assets/danush.jpg')} style={styles.image}/>
        </View>
        <View>
          <Text style={styles.myStatusHeading}>My status</Text>
          <Text style={styles.myStatussubtext}>Tap to add status update </Text>
        </View>

      </View>
       <FlatList
        data={combinedStatusData}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item})=>(
          <> 
            <Text style={styles.ViewedStatus}>{item.title}</Text>
            <FlatList
              data={item.data}
              keyExtractor={(item)=>item.id.toString()}
              renderItem={({item})=>(
                <View  style={styles.ViewedStatusContainer}>
                <View>
                  <Image source={require('../assets/sunder.jpg')} style={styles.image}/>
                </View>
                <View>
                  <Text style={styles.myStatusHeading}>{item.name}</Text>
                  <Text style={styles.myStatussubtext}>{item.time}</Text>
                </View>
                </View>
        )}
            
            />
          </>
        )}/>
       <TouchableOpacity
       style={styles.chatButton}
       onPress={()=>('#')}>
       <FontAwesome5 name='pen' size={24} color='grey'/>
      </TouchableOpacity>
      
      <TouchableOpacity
       style={styles.cameraButton}
       onPress={()=>('#')}>
       <FontAwesome5 name='camera' size={18} color='white'/>
      </TouchableOpacity>

      </View>
  )
}

export default status

const styles = StyleSheet.create({
   container:{
      flex:1,
    backgroundColor:'#fff'
   },
    myStatusContainer:{
      flexDirection:'row',
      alignItems:"center",
      padding:10,

    },
    image:{
      width:50,
      height:50,
      borderRadius:25,
       marginRight:10
    },
    myStatusHeading:{
      fontSize:16,
      fontWeight:'600',
    },
    myStatussubtext:{
      fontSize:14,
      color:'gray',

    },ViewedStatus:{
      fontSize:14,
      fontWeight:'600',
      color:'grey',
      marginTop:5,
      marginLeft:16,
      marginBottom:5
    },
    ViewedStatusContainer:{
      flexDirection:'row',
      alignItems:"center",
      padding:12,

    },
    chatButton:{
      position:'absolute',
      bottom:100,
      right:28,
      backgroundColor:"#e8e8e8",
      height:50,
      width:50,
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center'

    },
    cameraButton:{
      position:'absolute',
      bottom:30,
      right:28,
      backgroundColor:"#0e806a",
      height:50,
      width:50,
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center'

    }
})
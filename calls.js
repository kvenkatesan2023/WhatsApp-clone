import { StyleSheet, Text, View ,FlatList,TouchableOpacity,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import {Fontisto,MaterialCommunityIcons} from 'react-native-vector-icons';
import Data from "../chatdata"


const calls = () => {
  const[call ,setCall] = useState(Data)

  useEffect(()=>{
     setCall(Data)
  },[])
  return (

      <View style={styles.container} >
       <TouchableOpacity>
        <View style={styles.callContainer}>
          <View style={styles.linkContainer}>
        
             <Fontisto name="link" color='white' size={20}/>
          
          </View>
          <View>
            <Text style={styles.callLink}>Create a call link</Text>
            <Text style={styles.callSubTtext}>Share a link your whatsApp call</Text>
          </View>
          </View>
       </TouchableOpacity>
       <Text style={styles.recentText}>Recent</Text>
       <FlatList
         data={call}
         keyExtractor={(item)=>item.id.toString()}
         renderItem={({item})=>(
            <View style={styles.callContainer}>
                <Image source={require('../assets/sunder.jpg')} style={styles.image}/>
                 <View style={styles.callIconContainer}>
                  <View>
                     <Text style={styles.callName}>{item.name}</Text>
                     <View style={styles.callDetails}>
                       <MaterialCommunityIcons name='call-received' size={15} color='#075e54'/>
                       <Text style={styles.callTime}>{item.time}</Text>
                     </View>
                    </View>

                   
                  </View>
          
              </View>
            
         )}
       
       
       />
      
   

    </View>
  )
}

export default calls

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  },
  callContainer:{
    flexDirection:'row',
    alignItems:"center",
    padding:16
  },
  linkContainer:{
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:'#128c7e',
    alignItems:'center',
    justifyContent:'center',
    marginRight:16
  },
  callLink:{
      fontSize:16,
      fontWeight:'600',
  
  },
  callSubTtext:{
    fontSize:14,
    color:'grey'
  },
  recentText:{
    fontSize:18,
    fontWeight:'600',
    color:'grey',
    marginVertical:10,
    marginLeft:16
  },
  image:{
    width:50,
    height:50,
    borderRadius:25,
    marginRight:16,
  },
  callName:{
    fontSize:16,
    fontWeight:'600'
  },
  callDetails:{
    flexDirection:'row',
    alignItems:'center',

  },
  callTime:{
    fontSize:14,
    color:'grey',
    marginLeft:5
  }
})
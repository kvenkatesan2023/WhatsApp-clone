import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const community = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,fontWeight:"600"}}>Introducing comminities</Text>
      <Text style={{marginTop:10}}>Easy organies related groups and send now </Text>
                             <Text> your comminities like neighbourhoods </Text>
                              <Text> or schools, can have their own space</Text>

           <TouchableOpacity style={{backgroundColor:'#0e806a',width:'17%',height:40,padding:10,marginTop:30,borderRadius:16}} >
             <Text style={{textAlign:'center',fontSize:15,color:'white',fontWeight:'600'}}>Start your community</Text>
           </TouchableOpacity>
    </View>
  )
}

export default community

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
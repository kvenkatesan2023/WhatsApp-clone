import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Header from './Screens/Header'
import Navigation from './navigation'

const App = () => {
  return (
    
   
    <><View style={styles.container}>
      <Header />
   <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Navigation />
      </View>
      </View></>
     
 
   
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  

  }
  
})
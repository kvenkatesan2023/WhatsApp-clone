import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import community from './Screens/community'
import chats from './Screens/chats'
import status from './Screens/status'
import calls from './Screens/calls'


const Navigation = () => {

  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator
    initialRouteName='chats'
    screenOptions={{
        tabBarInactiveTintColor:'white',
        tabBarIndicatorStyle:{
            backgroundColor:'white'
        },
        tabBarLabelStyle:{
            fontWeight:'bold',

        },
        tabBarStyle:{
            backgroundColor:'#0e806a'
        }
    }}
    
    >
    <Tab.Screen name="community" 
    component={community} 
    options={{
        tabBarIcon:({ color })=>(
            <MaterialCommunityIcons name='account-group' color={color} size={24} />
        ),
        tabBarLabelStyle:{
            display:'none'
        }
    }}/>
    <Tab.Screen name="chats" component={chats} />
    <Tab.Screen name="status" component={status} />
    <Tab.Screen name="calls" component={calls} />
  </Tab.Navigator>
  </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})
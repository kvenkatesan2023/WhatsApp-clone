import {  } from 'expo-status-bar';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import {Feather,Entypo} from 'react-native-vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.block1}>
           <Text style={{fontWeight:'bold',fontFamily:'arial',fontSize:30,color:'white'}}>WhatsApp</Text>
           <View style={styles.iconHeader}>
                <Feather name ='camera' size={20} color="white" style={styles.iconBtn}/>
                <Feather name ='search' size={20} color="white" style={styles.iconBtn}/>
                 <Entypo name='dots-three-vertical' color='white' size={20}  style={styles.iconBtn}/>
            </View>
      </View>
     
      <StatusBar backgroundColor="blue"  />
      
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#0e806a',
    padding:80,
    paddingBottom:8,
    height:'16%'
    
  },
  block1:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    marginHorizontal:16
  },
  iconHeader:{
    flexDirection:'row',
    alignItems:'center',
  
  },
  iconBtn:{
    marginLeft:20
  }
});

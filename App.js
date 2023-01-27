import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TextInput ,Button,TouchableOpacity} from 'react-native';

export default function App() {
          
const[modalVisible,setModalVisible]=useState(false);
const[ text,settextuser]=useState("");
const[name,setname]=useState("");
const click=()=>{
  setModalVisible(true)
}
const hello=()=>{
  const h=text;
  const g=name;
  settextuser(h);
  setname(g);
  setModalVisible(false)

}


  return (

  <View style={styles.container}>
<Text style={styles.txt}>User Id :</Text>
<TextInput style={styles.inp} ><Text>{text}</Text></TextInput>
<Text style={styles.txt}>Name :</Text>
<TextInput style={styles.inp} ><Text>{name}</Text></TextInput>
<View style={{padding:30}}>
< Button  title='click me' onPress={click}></Button> 
</View>
<Modal
transparent={true}
visible={modalVisible}>
<View style={{height:250,width:350,backgroundColor:'silver',position:"relative",alignSelf: 'center',marginTop:230}}>
<TouchableOpacity onPress={() => setModalVisible(false)}>
  <Text style={styles.modalHeaderCloseText}>X</Text>
</TouchableOpacity> 
  <Text style={styles.txt}>User Id :</Text>
  <TextInput style={styles.inp}onChangeText={(Text)=>settextuser(Text)}></TextInput>
  <Text style={styles.txt}>Name :</Text>
  <TextInput style={styles.inp}onChangeText={(Text)=>setname(Text)}></TextInput>
  <View style={{padding:30}}>
  <Button  title='save' onPress={hello}></Button>
  </View>  
  </View> 
</Modal>  
        <StatusBar style="auto" />
    </View>
        
  );
}
  
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:
  {
    fontSize:35,
  },
  inp: {
    borderWidth:3,
    borderRadius:5,
    borderColor:'green',
    paddingLeft:20,
    paddingRight:50,
  },
  modalHeaderCloseText: {
    textAlign: 'right',
    paddingLeft: 5,
    paddingRight:10,
  },
  modal:{
    position:"relative",
  width: 250, 
  height: 100,
  backgroundColor: 'blue',
  justifyContent: 'center',
  alignSelf: 'center',
}
});

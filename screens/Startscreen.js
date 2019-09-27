import React, {useState} from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableWithoutFeedback, Keyboard,TextInput,Button } from 'react-native';

import Colors from '../constant/Colors';
 

import Card from '../components/Card';
import Input from '../components/input'
import Confirmbox from '../components/Confirmbox';

const Startscreen = (props) => {
   const [enteredValue,setEnterdValue] = useState('');
   const [confirm, setconfirm] = useState(false);
   const [chosenvalue, setChosenValue] = useState();



  const inputHandler = (inputvalue) =>{
     setEnterdValue(inputvalue.replace(/[^0-9]/g,''))
  };

const resetInputHandler = () => {
    setEnterdValue('');
    setconfirm(false);
}

const confrimInputHandler = () => {
  let  inputdata = parseInt(enteredValue);
  if(isNaN(inputdata) || inputdata <= 0 || inputdata >99){
      return;
  }

  setconfirm(true);
  setChosenValue(inputdata);
  setEnterdValue('');
  Keyboard.dismiss();
}


let outputconfirmed;

if(confirm){
    
        outputconfirmed =   <Card style ={styles.startGameContainer}>
                                <Confirmbox>{chosenvalue}</Confirmbox>
                                <View style={styles.sartbutton}>
                                    <Button title="Start Game" onPress = {() =>{props.onStartGame(chosenvalue)}}/>
                                </View>
                            </Card> 
      
    
}
    return (
        <TouchableWithoutFeedback onPress = {() => {
            Keyboard.dismiss();
        }}>
            <View style = {styles.startContainer}>
            <Card >
             <Text > Enter any number between 1 to 99 </Text>
             <Input 
              onChangeText = { inputHandler}
              value = {enteredValue}
              maxLength= {2}
              keyboardType="number-pad"              
              />
             <View style = { styles.buttonContainer}>
                 <Button title= "Reset" color={Colors.secondary} onPress={resetInputHandler} />
                 <Button title= "Submit" color={Colors.primary} onPress = {confrimInputHandler} />
             </View>
         </Card> 
            {outputconfirmed}
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    startContainer:{
        flex:1,
        alignItems:"center"
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    startGameContainer:{
        width:300,
        justifyContent:'center'
    }
});

export default Startscreen;
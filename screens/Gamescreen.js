import React , {useState,useRef, useEffect} from 'react';
import { View, Text, Button, StyleSheet, Alert} from 'react-native';
import Card from '../components/Card';
import Confirmbox from '../components/Confirmbox';

const guessingNumberGenerator = (lower, upper, exclude) => {
    let min = Math.ceil(lower);
    let max = Math.floor(upper);

    const guessed = Math.floor(Math.random() * (max - min)) + min;
    if(guessed === exclude){
       return guessingNumberGenerator(min,max,exclude);
    }else {
        return guessed;
    }
}



const Gamescreen = props => {
  
   const [currentGuess, setcurrentGuess] = useState(guessingNumberGenerator(1,100, props.userSelectednumber));
   const [rounds, setrounds] = useState(0);
  
  
   const currentLow = useRef(1);
   const currentHigh = useRef(100);

   const guessHandler = direction => {
       if((direction === 'Lower' && currentGuess < props.userSelectednumber) || (direction === 'Upper' && currentGuess >props.userSelectednumber)){
           
        Alert.alert('Don\'t Lie', ' guess proper number boy',[{text:'Cancel',style:'cancel'}]);
        return;
       }

       if(direction === "Lower"){
          currentHigh.current = currentGuess;
       }else{
           currentLow.current = currentGuess;
       }
       const nxtNumber = guessingNumberGenerator(currentLow.current,currentHigh.current,currentGuess);       
       setrounds(currentroundvalue => currentroundvalue + 1);
       setcurrentGuess(nxtNumber);

   }

      const {userSelectednumber, ongameOver} = props //    we are desturcturing the props object and storing it 

   useEffect(() => {
   if(currentGuess === userSelectednumber){
       ongameOver(rounds);
   }
                   }, [currentGuess, userSelectednumber, ongameOver]);

    return (
       
        <View style = {styles.gameScreenContainer}>
            <Confirmbox>{currentGuess}</Confirmbox>
            <Card style = {styles.buttonContainer}>
            <Button title = "Lower" onPress = {guessHandler.bind(this, "Lower")}/>
            <Button title = "Upper" onPress = {guessHandler.bind(this, "Upper")}/>                
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20 ,        
    },
    gameScreenContainer:{
        flex: 1,
        alignItems: 'center',
    }
});
export default Gamescreen

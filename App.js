import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

import Startscreen from './screens/Startscreen';
import Gamescreen from './screens/Gamescreen';
import Gameoverscreen from './screens/Gameoverscreen';


export default function App() {
  const [userChoice, setuserChoice] = useState();
  const [gameOver, setgameOver] = useState(0);

  const restartGameHandler = () => {
    setgameOver(0);
    setuserChoice(null);
  }

  const startGameHandler = selectednumber =>{
    setuserChoice(selectednumber);
    setgameOver(0);
  }

  const gameOverHandler = foundnumber =>{
    setgameOver(foundnumber);
  }


  let content = <Startscreen onStartGame = {startGameHandler}/>;

  if(userChoice && gameOver <= 0){
    content = <Gamescreen userSelectednumber = {userChoice} ongameOver = {gameOverHandler}/>
  }else if(gameOver > 0){
    content = <Gameoverscreen totalrounds = {gameOver} usernumber ={userChoice} onResetGame = {restartGameHandler}/>;
  }

  return (
    <View style={styles.container}>
     <Header title = "Number Guessing"/>
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});

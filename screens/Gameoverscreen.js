import React from 'react'
import { View, Text ,StyleSheet, Button } from 'react-native'

const Gameoverscreen = (props) => {
    return (
        <View style = {styles.gameOverContainer}>
            <Text> you have chosen {props.usernumber}<Text>which took  app to {props.totalrounds} guesses to find it.</Text></Text>
            <Button title ="New Game" onPress = {() => props.onResetGame()}/>
        </View>
    )
}


const styles = StyleSheet.create({
    gameOverContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
})

export default Gameoverscreen;

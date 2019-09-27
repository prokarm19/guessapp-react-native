import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


import Card from './Card';
import Colors from '../constant/Colors';

const styles = StyleSheet.create({
    numbercircle:{
        borderRadius: 20,
        borderWidth: 2,
        borderColor: Colors.primary ,
        justifyContent: 'center',      
        padding:10,
        fontSize:22
    },
    sartbutton:{
        marginVertical: 10,
    }
})


const Confirmbox = (props) => {
    return (
            <View style = {styles.numbercircle}>
                <Text>{props.children}</Text>
            </View>
    )
}

export default Confirmbox ;

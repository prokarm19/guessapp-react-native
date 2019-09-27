import React from 'react';
import { View, StyleSheet } from 'react-native';


const Card = (props) => {
    
      

    return (
        <View style = {{...styles.Card, ...props.style}}>
        {props.children}
    </View> 
    );
}

const styles = StyleSheet.create({
    Card:{
        shadowColor: '#000',
        shadowOffset: {width:0, height:3},
        backgroundColor:"#c99",
        shadowOpacity: .26,
        shadowRadius: 6,
        padding:15,
        marginVertical: 10 ,
        width:"80%",
        borderRadius: 10,
        elevation:9

    }
})


export default Card;
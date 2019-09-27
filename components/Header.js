import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors  from '../constant/Colors';

const styles = StyleSheet.create({
    headerContainer: {
        width:"100%",
        backgroundColor:Colors.primary,
        paddingVertical: 30,
        justifyContent:"center",
        alignItems: 'center',
    },
    title:{
        marginTop: 10,
    }

});

const Header = (props) => {
    return (
        <View style = {styles.headerContainer}>
          <Text style = {styles.title}> {props.title}</Text>
        </View>
    );
}

export default Header;
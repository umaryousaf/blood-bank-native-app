import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

function AppButton({title,onPress, style}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.blood,
        width:"100%",
        padding: 12,
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 15,
        marginVertical: 10
    },
    text:{
        color: colors.white,
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: "500"
    }
})

export default AppButton;
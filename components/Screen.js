import React from 'react';
import { View, StyleSheet } from 'react-native'
import Constants from "expo-constants"
import colors from '../config/colors'

function Screen({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white
    }
})

export default Screen;
import React from 'react';
import { StyleSheet } from 'react-native'
import AppText from '../components/AppText'
import colors from '../config/colors'

function ErrorMessage({error, visible}) {
    if(!visible || !error) return null
    return (
       <AppText style={styles.error}>{error}</AppText>
    );
}

const styles = StyleSheet.create({
    error:{
        color: colors.blood
    }
})

export default ErrorMessage;
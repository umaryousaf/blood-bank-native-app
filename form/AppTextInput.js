import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../config/colors'

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.inputContainer}>
            {icon && <MaterialIcons name={icon} style={styles.icon} size={20} color={colors.blood}/>}
            <TextInput {...otherProps} style={styles.textInput}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: "row",
        width:"100%",
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 15,
        padding:10,
        marginTop: 10
    },
    icon:{
        marginRight: 5,
        marginTop: 3,
    }
})

export default AppTextInput;
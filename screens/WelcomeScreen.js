import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import colors from '../config/colors'
import { connect } from 'react-redux'
import { addUser } from '../actions/auth'

function WelcomeScreen({navigation, addUser}) {
    const googleLogin = () => {
        addUser()
    }
    return (
        <View style={styles.container}>
            <Entypo name="drop" color={colors.white} size={120} />
            <Text style={styles.title}>MU Blood Bank</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={googleLogin}>
                    <Text style={styles.text}>Login with Google</Text>
                </TouchableOpacity>
            </View>
              <Text style={styles.bottom} onPress={() => navigation.navigate('user_profile')}>User Profile </Text>
            <Text style={styles.bottom} onPress={() => navigation.navigate('Donor_Form')}>Donor Form </Text>
            <Text style={styles.bottom} onPress={() => navigation.navigate('home_page')}>Home Page </Text>
            <Text style={styles.bottom} onPress={() => navigation.navigate('blood_group')}>Blood Group </Text>
            <Text style={styles.bottom} onPress={() => navigation.navigate('blood_detail')}>Blood Detail </Text>
            <Text style={styles.footer}>Powered By Muhammad Umar</Text>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blood,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer:{
        width: "100%",
        padding: 20
    },
    title:{
        fontSize:20,
        color: colors.white,
        marginBottom:40 
    },
    footer:{
        color: colors.white,
        justifyContent: "flex-end",
    },
    button:{
        backgroundColor: colors.white,
        width:"100%",
        padding: 12,
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 15,
        marginVertical: 10
    },
    text:{
        color: colors.blood,
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: "500"
    },
    bottom:{
        color: colors.white
    }
})

const mapStateToProps = state => ({
    // user: state.auth.user
})

export default connect(mapStateToProps, { addUser })(WelcomeScreen);
import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import colors from '../config/colors'
import * as yup from "yup"
import {AppForm, AppFormFeild, SubmitButton} from "../form"

const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password")
})

function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <Entypo
                    name="drop"
                    color={colors.blood}
                    size={120}
                    />
                <Text style={styles.text}>Sign In</Text>
            </View>

            <AppForm 
                initialValues={{email: "", password: ""}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
               <AppFormFeild
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    name="email"
                    keyboardType="email-address"
                    placeholder="Email"
                />
                <AppFormFeild
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    secureTextEntry
                    placeholder="Password"
                />

                <SubmitButton title="Login" />
           
            </AppForm>
           


            <Text style={styles.bottom} onPress={() => navigation.navigate('Register')}>New User? Sign Up </Text>
            <Text style={styles.bottom} onPress={() => navigation.navigate('user_profile')}>User Profile </Text>
            <Text style={styles.bottom} onPress={() => navigation.navigate('Donor_Form')}>Donor Form </Text>
            <Text style={styles.bottom} onPress={() => navigation.navigate('home_page')}>Home Page </Text>
            <Text style={styles.bottom} onPress={() => navigation.navigate('blood_group')}>Blood Group </Text>
            <Text style={styles.bottom} onPress={() => navigation.navigate('blood_detail')}>Blood Detail </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:20
    },
    text:{
        fontSize:20,
        color: colors.black,
        marginBottom:40 
    },
    bottom:{
        fontSize: 13,
        left: 110
    },
    upper:{
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    }
})

export default LoginScreen;
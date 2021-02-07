import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import colors from '../config/colors'
import * as Yup from "yup"
import {AppForm, AppFormFeild, SubmitButton} from "../form"

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    password2: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords does not match')
})


function RegisterScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <Entypo
                    name="drop"
                    color={colors.blood}
                    size={120}
                    />
                
                <Text style={styles.text}>Sign Up</Text>
            </View>
            
            <AppForm 
                initialValues={{email: "", password: "", password2: "", name: ""}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormFeild
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Name"
                    icon="account-circle"
                    name="name"
                />

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

                <AppFormFeild
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password2"
                    secureTextEntry
                    placeholder="Confirm Password"
                />

                <SubmitButton title="Sign Up"/>


            </AppForm>

          

            <Text style={styles.bottom} onPress={() => navigation.navigate('Login')}>Already Have An Account? Sign In </Text>
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
        left: 60
    },
    upper:{
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    }
})

export default RegisterScreen;
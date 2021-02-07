import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import Screen from '../components/Screen'
import colors from '../config/colors';
import { connect } from 'react-redux'
import {addNewProfile} from "../actions/profiles"
import { AppForm, AppFormFeild, SubmitButton } from '../form'

function DonorFormScreen({ addNewProfile }) {
    return (
      <Screen>
        <ScrollView>
          <Text style={styles.subtitle}>Please Fill the form to become Donor</Text>
          <View style={styles.donorFormContainer}>
            <AppForm 
              initialValues={{name: "", email: "", age: "", address: "", gender: "", number: "", city: "", bio: "", bloodType: ""}}
              onSubmit={addNewProfile}
            >
              <AppFormFeild
                name="name"
                autoCapitalize="none"
                autoCorrect={false}
                icon="account-circle"
                placeholder="Name"
              />

              <AppFormFeild
                name="email"
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                placeholder="Email"
              />

              <AppFormFeild
                name="age"
                autoCapitalize="none"
                autoCorrect={false}
                icon="baby-changing-station"
                placeholder="Age"
              />

              <AppFormFeild
                name="gender"
                autoCapitalize="none"
                autoCorrect={false}
                icon="view-agenda"
                placeholder="Gender"
              />

              <AppFormFeild
                name="address"
                autoCapitalize="none"
                autoCorrect={false}
                icon="add-location"
                placeholder="Address"
              />

              <AppFormFeild
                name="bloodType"
                autoCapitalize="none"
                autoCorrect={false}
                icon="pin-drop"
                placeholder="Write Blood Group (Use '+' or '-' Sign)"
                maxLength={3}
              />

              <AppFormFeild
                name="number"
                autoCapitalize="none"
                autoCorrect={false}
                icon="phone-enabled"
                keyboardType="numeric"
                placeholder="Number"
              />

              <AppFormFeild
                name="city"
                autoCapitalize="none"
                autoCorrect={false}
                icon="location-city"
                placeholder="City"
              />

              <AppFormFeild
                name="bio"
                autoCapitalize="none"
                autoCorrect={false}
                icon="location-city"
                placeholder="Bio"
                maxLength={100}
              />

              <SubmitButton title="Submit" />
            
            </AppForm>
          </View>
        </ScrollView>
      </Screen>
    );
}

const styles = StyleSheet.create({
    subtitle:{
      color: colors.blood,
      top:10,
      left: 10,
      fontSize: 20
    },
    donorFormContainer:{
      padding: 10
    },
})

export default connect(null, {addNewProfile})(DonorFormScreen);
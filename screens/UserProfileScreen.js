import React from 'react';
import { Text, View,StyleSheet, Image, ScrollView, Linking } from 'react-native'
import Screen from '../components/Screen'
import colors from '../config/colors'
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import AppButton from '../components/AppButton'

function UserProfileScreen() {
    return (
        <Screen>
            <ScrollView>
                <View style={styles.container}>
                    <Image 
                        style={styles.image} 
                        source={require("../assets/avatar.png")}
                    />

                    <View>
                        <Text style={styles.name}>Umar Yousaf</Text>
                        <Text style={styles.email}>umaryousaf2002@gmail.com</Text>
                    </View>
                </View> 

                <View style={styles.bioContainer}>
                    <Text style={styles.bioTitle}>Bio</Text>
                    <Text style={styles.bio}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum ligula. Aliquam ante sem, semper dictum elit auctor, interdum sagittis nulla. Integer neque augue, posuere vitae commodo eu, finibus eget dui. Nulla nec nisl orci. 
                    </Text>
                </View>

                <TableView style={styles.tableInfo}>
                    <Section header="DONOR INFO" >
                        <Cell 
                            cellStyle="RightDetail" 
                            title="Name" 
                            detail="Umar Yousaf" 
                        />
                        <Cell 
                            cellStyle="RightDetail" 
                            title="Email" 
                            detail="umaryousaf2002@gmail.com" 
                        />
                        <Cell 
                            cellStyle="RightDetail" 
                            title="Gender" 
                            detail="Male" 
                        />
                        <Cell 
                            cellStyle="RightDetail" 
                            title="Age" 
                            detail="20" 
                        />
                        <Cell 
                            cellStyle="RightDetail" 
                            title="Blood Group" 
                            detail="O+" 
                        />
                        <Cell 
                            cellStyle="RightDetail" 
                            title="Address" 
                            detail="Gulistan Colony" 
                        />
                        <Cell 
                            cellStyle="RightDetail" 
                            title="City" 
                            detail="Faisalabad" 
                        />
                        <Cell 
                            cellStyle="RightDetail" 
                            title="Contact" 
                            detail="0318-7033680" 
                        />
                    </Section>
                </TableView>

                <View style={styles.tableMedical}>
                    <Text style={styles.bioTitle}>Donor's Medical History</Text>
                    <TableView>
                        <Section >
                            <Cell 
                                cellStyle="RightDetail" 
                                title="Cancer" 
                                detail="No" 
                            />
                            <Cell 
                                cellStyle="RightDetail" 
                                title="Diabetes" 
                                detail="No" 
                            />
                            <Cell 
                                cellStyle="RightDetail" 
                                title="Headache" 
                                detail="Yes" 
                            />
                            <Cell 
                                cellStyle="RightDetail" 
                                title="AIDS" 
                                detail="No" 
                            />
                        </Section>
                    </TableView>
                </View>
                
                <View style={styles.button}>
                    <AppButton title="Contact With Donor" onPress={() => Linking.openURL("tel:03187033680")}/>
                </View>
            </ScrollView>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.blood,
        width: "100%",
        height: 100,
        padding: 10,
        flexDirection: "row",
    },
    image:{
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    name:{
        color: colors.white,
        fontSize: 18,
        top:15,
        left: 10
    },
    tableInfo:{
        padding: 5
    },
    tableMedical:{
        padding: 5
    },
    email:{
        color: colors.white,
        fontSize: 14,
        top: 15,
        left: 10,
        fontWeight: "bold"
    },
    iconBack:{
        top: 15,
        left: 10
    },
    bioContainer:{
        padding: 5
    },
    bioTitle:{
        fontSize: 20,
        color: colors.blood,
    },
    button:{
        padding: 10
    }
})

export default UserProfileScreen;
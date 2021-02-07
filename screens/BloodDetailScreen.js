import React from 'react';
import Screen from '../components/Screen'
import { Text, View,StyleSheet } from 'react-native'
import colors from '../config/colors'
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import AppButton from '../components/AppButton'
import { ScrollView } from 'react-native-gesture-handler'


function BloodDetailScreen({navigation}) {
    const data = [
        {
            id: 1,
            title: "A+",
            description: "A+ is the second most common blood type. Blood group A individuals have the A antigen on the surface of their RBCs, and blood serum containing IgM antibodies against the B antigen. Therefore, a group A individual can receive blood only from individuals of groups A or O (with A being preferable), and can donate blood to individuals with type A or AB. ",
            popu: "A+ is found in 34% of people, making it the second most common blood type behind O+.",
            donors: [
                {
                    text: "A+",
                    desc: "Positive"
                },
                {
                    text: "A-",
                    desc: "Negative"
                },
                {
                    text: "O+",
                    desc: "Positive"
                },
                {
                    text: "O+",
                    desc: "Negative"
                }
            ],
            receptor: [
                {
                    text: "A+",
                    desc: "Positive"
                },
                {
                    text: "B+",
                    desc: "Positive"
                }
            ],
        },
        {
            id: 2,
            title: "A-",
            description:  "A- is a powerful blood type. Blood group A individuals have the A antigen on the surface of their RBCs, and blood serum containing IgM antibodies against the B antigen. Therefore, a group A individual can receive blood only from individuals of groups A or O (with A being preferable), and can donate blood to individuals with type A or AB. ",
            popu: "A- is only found in 6% of people, so donations are always needed.",
            donors: [
                {
                    text: "A-",
                    desc: "Negative"
                },
                {
                    text: "O+",
                    desc: "Negative"
                }
            ],
            receptor: [
                {
                    text: "A+",
                    desc: "Positive"
                },
                {
                    text: "A-",
                    desc: "Negative"
                },
                {
                    text: "AB+",
                    desc: "Positive"
                },
                {
                    text: "AB+",
                    desc: "Negative"
                }
            ],
        },
        {
            id: 3,
            title: "B+",
            description:  "B+ is a community supporter.Blood Group B+ individuals have the B antigen on the surface of their RBCs, and blood serum containing IgM antibodies against the A antigen. Therefore, a group B individual can receive blood only from individuals of groups B or O (with B being preferable), and can donate blood to individuals with type B or AB. ",
            popu: "Since various types of B+ donations are useful, donations are important. Only 8% of the population has B+ blood.",
            donors: [
                {
                    text: "B+",
                    desc: "Positive"
                },
                {
                    text: "B-",
                    desc: "Negative"
                },
                {
                    text: "O+",
                    desc: "Positive"
                },
                {
                    text: "O-",
                    desc: "Negative"
                }
            ],
            receptor: [
                {
                    text: "B+",
                    desc: "Positive"
                },
                {
                    text: "AB+",
                    desc: "Positive"
                },
    
            ],
        },
        {
            id: 4,
            title: "B-",
            description:  "B- is an uncommon blood type.  Blood Group B+ individuals have the B antigen on the surface of their RBCs, and blood serum containing IgM antibodies against the A antigen. Therefore, a group B individual can receive blood only from individuals of groups B or O (with B being preferable), and can donate blood to individuals with type B or AB. ",
            popu: "B- is only found in less than 2% of the population, making it an incredibly important blood type to have on the shelves.",
            donors: [
                {
                    text: "O-",
                    desc: "Negative"
                },
                {
                    text: "B-",
                    desc: "Negative"
                },
            ],
            receptor: [
                {
                    text: "B+",
                    desc: "Positive"
                },
                {
                    text: "AB+",
                    desc: "Positive"
                },
                {
                    text: "B-",
                    desc: "Negative"
                },
                {
                    text: "AB-",
                    desc: "Negative"
                },
    
            ],
        },
        {
            id: 5,
            title: "O+",
            description:  "O+ is the most common blood type. Blood group O (or blood group zero in some countries) individuals do not have either A or B antigens on the surface of their RBCs, and their blood serum contains IgM anti-A and anti-B antibodies. Therefore, a group O individual can receive blood only from a group O individual, but can donate blood to individuals of any ABO blood group (i.e., A, B, O or AB). ",
            popu: "O+ is found in 38% of people, making it the most common blood type.",
            donors: [
                {
                    text: "O-",
                    desc: "Negative"
                },
                {
                    text: "B-",
                    desc: "Negative"
                },
            ],
            receptor: [
                {
                    text: "O+",
                    desc: "Positive"
                },
                {
                    text: "A+",
                    desc: "Positive"
                },
                {
                    text: "B+",
                    desc: "Positive"
                },
                {
                    text: "AB+",
                    desc: "Positive"
                },
    
            ],
        },
        {
            id: 6,
            title: "O-",
            description:  "O- is the highest in-demand blood type. Blood group O (or blood group zero in some countries) individuals do not have either A or B antigens on the surface of their RBCs, and their blood serum contains IgM anti-A and anti-B antibodies. Therefore, a group O individual can receive blood only from a group O individual, but can donate blood to individuals of any ABO blood group (i.e., A, B, O or AB). ",
            popu: "O- makes up only 6.6% of the population, found in just 1 of every 15 people.",
            donors: [
                {
                    text: "A-",
                    desc: "Negative"
                },
                {
                    text: "O-",
                    desc: "Negative"
                },
            ],
            receptor: [
                {
                    text: "A+",
                    desc: "Positive"
                },
                {
                    text: "A-",
                    desc: "Negative"
                },
                {
                    text: "B+",
                    desc: "Positive"
                },
                {
                    text: "B-",
                    desc: "Negative"
                },
                {
                    text: "O+",
                    desc: "Positive"
                },
                {
                    text: "AB-",
                    desc: "Negative"
                },
                {
                    text: "AB+",
                    desc: "Positive"
                },
                
    
            ],
        },
        {
            id: 7,
            title: "AB+",
            description:  "AB+ is the universal recipient. Blood group AB individuals have both A and B antigens on the surface of their RBCs, and their blood plasma does not contain any antibodies against either A or B antigen. Therefore, an individual with type AB blood can receive blood from any group (with AB being preferable), but cannot donate blood to any group other than AB. They are known as universal recipients. ",
            popu: "AB+ is only found in 3% of the population, so donations are incredibly important for patients in need of plasma.",
            
            donors: [
                {
                    text: "A+",
                    desc: "Positive"
                },
                {
                    text: "A-",
                    desc: "Negative"
                },
                {
                    text: "B+",
                    desc: "Positive"
                },
                {
                    text: "B-",
                    desc: "Negative"
                },
                {
                    text: "O+",
                    desc: "Positive"
                },
                {
                    text: "AB-",
                    desc: "Negative"
                },
                {
                    text: "O-",
                    desc: "Positive"
                },
            ],
            receptor: [
                {
                    text: "AB+",
                    desc: "Positive"
                },
            ],
        },
        {
            id: 8,
            title: "AB-",
            description:  "AB- is the rarest blood type. Blood group AB individuals have both A and B antigens on the surface of their RBCs, and their blood plasma does not contain any antibodies against either A or B antigen. Therefore, an individual with type AB blood can receive blood from any group (with AB being preferable), but cannot donate blood to any group other than AB. They are known as universal recipients. ",
                popu: "AB- is only found in less than 1% of the population, making it the most rare and highly in-demand blood type. AB is the most desirable blood type for platelet and plasma donations.",
            
            donors: [
            
                {
                    text: "A-",
                    desc: "Negative"
                },
    
                {
                    text: "B-",
                    desc: "Negative"
                },
                {
                    text: "O-",
                    desc: "Negative"
                },
                {
                    text: "AB-",
                    desc: "Negative"
                },
    
            ],
            receptor: [
                {
                    text: "AB+",
                    desc: "Positive"
                },
                {
                    text: "AB-",
                    desc: "Negative"
                },
                
    
            ],
        }
       ]
    

    return (
        <Screen>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Blood Group: {data[0].title}</Text>
                    <Text style={styles.subtitle}>About:</Text>
                    <Text style={styles.desc}>{data[0].description}</Text>
                    <Text style={styles.subtitle}>Matching Donor Blood Type:</Text>

                    <TableView style={styles.tableInfo}>
                        <Section>
                            
                            <Cell 
                                cellStyle="RightDetail" 
                                title={data[0].donors[0].text}
                                detail={data[0].donors[0].desc} 
                                />
                            <Cell 
                                cellStyle="RightDetail" 
                                title={data[0].donors[1].text} 
                                detail={data[0].donors[1].desc}
                                />
                            <Cell 
                                cellStyle="RightDetail" 
                                title={data[0].donors[2].text} 
                                detail={data[0].donors[2].desc} 
                                />
                            <Cell 
                                cellStyle="RightDetail" 
                                title={data[0].donors[3].text} 
                                detail={data[0].donors[3].desc}
                                />
                        
                        </Section>
                    </TableView>

                    <Text style={styles.subtitle}>Matching Receptor of Blood Type </Text>
                    <TableView style={styles.tableInfo}>
                        <Section>
                            <Cell 
                                cellStyle="RightDetail" 
                                title={data[0].receptor[0].text} 
                                detail={data[0].receptor[0].desc}
                            />
                            <Cell 
                                cellStyle="RightDetail" 
                                title={data[0].receptor[1].text} 
                                detail={data[0].receptor[1].desc} 
                            />
                        </Section>
                    </TableView>

                    <Text style={styles.subtitle}>POPULAR POSITIVITY:</Text>
                    <Text style={styles.desc}>{data[0].popu}</Text>
                    <AppButton title="See donor's" onPress={()=> navigation.navigate("home_page")}/>

                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    title:{
        color: colors.blood,
        fontWeight: "bold",
        fontSize: 24
    },
    subtitle:{
        color: colors.blood,
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10
    },
    desc:{
        textAlign: "justify"
    }
})

export default BloodDetailScreen;
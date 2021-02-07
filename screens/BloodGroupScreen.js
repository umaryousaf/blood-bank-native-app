import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native'
import Screen from '../components/Screen'
import colors from '../config/colors'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'


function BloodGroupScreen({navigation}) {

    const bloods = [
        {
            id: 1,
            name: "Blood Group: A+",
            detail: "This is Blood Group A+",
            image: require("../assets/1.jpg")
        },
        {
            id: 2,
            name: "Blood Group: A-",
            detail: "This is Blood Group A-",
            image: require("../assets/2.jpg")
        },
        {
            id: 3,
            name: "Blood Group: B+",
            detail: "This is Blood Group B+",
            image: require("../assets/3.jpg")
        },
        {
            id: 4,
            name: "Blood Group: B-",
            detail: "This is Blood Group B-",
            image: require("../assets/4.jpg")
        },
        {
            id: 5,
            name: "Blood Group: O+",
            detail: "This is Blood Group O+",
            image: require("../assets/5.jpg")
        }, 
        {
            id: 6,
            name: "Blood Group: O-",
            detail: "This is Blood Group O-",
            image: require("../assets/6.jpg")
        },
        {
            id: 7,
            name: "Blood Group: AB+",
            detail: "This is Blood Group AB+",
            image: require("../assets/7.jpeg")
        },
        {
            id: 8,
            name: "Blood Group: AB-",
            detail: "This is Blood Group AB-",
            image: require("../assets/8.jpg")
        },
    ]

    return (
        <Screen>
            <View>
                <FlatList 
                    data={bloods}
                    keyExtractor={blood => blood.id.toString()}
                    renderItem={({item}) => 
                    <ListItem 
                        title={item.name}
                        subTitle={item.detail}
                        image={item.image}
                        onPress={()=> navigation.navigate("blood_detail")}
                    /> }  
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View> 
        </Screen>
    );
}


export default BloodGroupScreen;
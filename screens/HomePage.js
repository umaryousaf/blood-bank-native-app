import React from 'react';
import { View, FlatList } from 'react-native'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListitemSeparator from "../components/ListItemSeparator"
import { connect } from 'react-redux'
import {getProfiles} from "../actions/profiles"
import { useEffect } from 'react'
import { data } from "../config/data"

function HomePage({navigation, profiles, getProfiles}) {

    useEffect(() => {
        getProfiles()
    }, [getProfiles])

    const users = [
        {
            id: 1,
            name: "Umar Yousaf",
            Blood: "Blood Group: O+",
            image: require("../assets/avatar.png")
        },
        {
            id: 2,
            name: "Shaheryar Yousaf",
            Blood: "Blood Group: O+",
            image: require("../assets/avatar.png")
        },
        {
            id: 3,
            name: "Muhammad Ali Mughal",
            Blood: "Blood Group: O+",
            image: require("../assets/avatar.png")
        },
        {
            id: 4,
            name: "Basit",
            Blood: "Blood Group: O+",
            image: require("../assets/avatar.png")
        },
        {
            id: 5,
            name: "Ghous Ahmad",
            Blood: "Blood Group: O+",
            image: require("../assets/avatar.png")
        }, 
        {
            id: 6,
            name: "Sajawal Awan",
            Blood: "Blood Group: O+",
            image: require("../assets/avatar.png")
        },
        {
            id: 7,
            name: "Ahmad",
            Blood: "Blood Group: O+",
            image: require("../assets/avatar.png")
        },
        {
            id: 8,
            name: "Abdullah",
            Blood: "Blood Group: O+",
            image: require("../assets/avatar.png")
        }
       
    ]

    return (
        <Screen >
            <View>
                <FlatList 
                    data={data}
                    keyExtractor={data => data.id.toString()}
                    renderItem={({item}) => 
                    <ListItem 
                    title={item.name}
                    subTitle={`Blood Group: ${item.blood_group}`}
                    // image={item.image}
                    onPress={()=> navigation.navigate("user_profile")}
                    /> }  
                    ItemSeparatorComponent={ListitemSeparator}
                />
            </View>
        </Screen>
    );
}

const mapStateToProps = state => ({
    profiles: state.profiles.profiles
})

export default connect(mapStateToProps, {getProfiles})(HomePage);
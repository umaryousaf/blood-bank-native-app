import React from 'react';
import { View, StyleSheet,Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors'
import AppText from './AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItem({title, subTitle, image,onPress ,renderRightActions}) {
    return (
        <Swipeable >
            <TouchableHighlight
                underlayColor={colors.lightgray}
                onPress={onPress}>
                    <View style={styles.mainContainer}>
                        <View style={styles.container}>
                            {/* <Image style={styles.image} source={image}/> */}
                            <View>
                                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                                <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
                            </View>
                        </View>
                        <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
                    </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10
    },
    title:{
        fontSize: 20,
        fontWeight:"500",
        top: 12
    },
    subTitle:{
        color:colors.medium,
        top: 12
    },
    mainContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding:15  
    }

})

export default ListItem;
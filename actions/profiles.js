import {
    GET_PROFILES,
    GET_PROFILES_FAIL,
    GET_SINGLE_PROFILE,
    GET_SINGLE_PROFILE_FAIL,
    ADD_NEW_PROFILE,
    ADD_NEW_PROFILE_FAIL
} from './types'
import { db } from '../config/firebase';

export const getProfiles = () => async dispatch => {

    try {
        db.ref('profiles').on('value', (snapshot) => {
            let itemsList = []
            snapshot.forEach((snap) => {
                var key = snap.key
                var data = snap.val()
                const {
                    address,
                    age,
                    bio,
                    bloodType,
                    city,
                    email,
                    gender,
                    name,
                    number,
                } = data
                itemsList.push({
                    key: key,
                    address: address,
                    age: age,
                    bio: bio,
                    bloodType: bloodType,
                    city: city,
                    email: email,
                    gender: gender,
                    name: name,
                    number: number
                })

            })
            dispatch({
                type: GET_PROFILES,
                payload: itemsList
            })
        })

    } catch (error) {
        dispatch({
            type: GET_PROFILES_FAIL
        })
        console.log(error)
    }

}


export const getSingleProfile = (id) => async dispatch => {

    try {
        db.ref(`profiles/${id}`).on('value', (snapshot) => {
            const itemSingle = snapshot.val()
            dispatch({
                type: GET_SINGLE_PROFILE,
                payload: itemSingle
            })
        })
    } catch (error) {
        dispatch({
            type: GET_SINGLE_PROFILE_FAIL
        })
    }

}


export const addNewProfile = (adData) => async dispatch => {
    try {
        const data = db.ref('/').child('profiles').push(adData)
        dispatch({
            type: ADD_NEW_PROFILE,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_NEW_PROFILE_FAIL
        })
    }

}
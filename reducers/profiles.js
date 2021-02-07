import {
    GET_PROFILES,
    GET_PROFILES_FAIL,
    GET_SINGLE_PROFILE,
    GET_SINGLE_PROFILE_FAIL,
    ADD_NEW_PROFILE,
    ADD_NEW_PROFILE_FAIL
} from '../actions/types'

const initialState = {
    profiles: [],
    profile: {},
}

export default function (state = initialState, action) {

    const { payload, type } = action

    switch (type) {
        case GET_PROFILES:
            return {
                ...state,
                ads: payload
            }
        case GET_SINGLE_PROFILE:
            return {
                ...state,
                ad: payload
            }
        case ADD_NEW_PROFILE:
            return {
                ...state,
                ads: [payload, ...state.ads]
            }
        case GET_SINGLE_PROFILE_FAIL:
        case GET_PROFILES_FAIL:
        case ADD_NEW_PROFILE_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}
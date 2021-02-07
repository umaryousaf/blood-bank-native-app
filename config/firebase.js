import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDgKBZoIh7OZpQn64Iphr3m2-id5GEXCVY",
    authDomain: "blood-bank-native-app.firebaseapp.com",
    databaseURL: "https://blood-bank-native-app-default-rtdb.firebaseio.com",
    projectId: "blood-bank-native-app",
    storageBucket: "blood-bank-native-app.appspot.com",
    messagingSenderId: "899389565717",
    appId: "1:899389565717:web:f42b7c349969df1cc5171c"
};

export const firebase2 = firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth
export const db = firebase.database()
export const storage = firebase.storage()
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: 'AIzaSyCauKp2lpdywWLW38FreEu6IFiWCqjLT54',
    authDomain: 'netflixgpt-4d8d8.firebaseapp.com',
    projectId: 'netflixgpt-4d8d8',
    storageBucket: 'netflixgpt-4d8d8.appspot.com',
    messagingSenderId: '660827380036',
    appId: '1:660827380036:web:af54762eac504c3659df11',
    measurementId: 'G-L7SDSK4DJL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

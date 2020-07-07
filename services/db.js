import * as firebase from 'firebase';
import { firebaseConfig } from '../config/config';

export const QUOTE_REF = 'quotes/';

export default firebase;

export const createQuote = (quote) => {
    // firebase.database().ref(QUOTE_REF).push(quote);
    let newRef = firebase.database().ref('quotes/').push();
    let key = newRef.key;

    let _quote = {
        id: key,
        ...quote
    }

    newRef.set(_quote).then(res => {
        
    }).catch(error => {
        console.log("Error in inserting data: " + error);
    });
}

export const quoteListener = () => {
    firebase.database().ref(QUOTE_REF).on('value', (snapshot) => {
        // todo: do something with 
    })
}

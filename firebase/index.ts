import firebase from "firebase-admin";
import serviceAccount from "./keys.json";

if (!firebase.apps.length) {
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount as any),
  });
} else {
  firebase.app();
}

export const firestore = firebase.firestore();

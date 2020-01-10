import firebase from 'firebase'
//Web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCVdaJkAIHPCfYZ4YxlLHzId07scXiDIE0",
  authDomain: "yw-photos-viewer.firebaseapp.com",
  databaseURL: "https://yw-photos-viewer.firebaseio.com",
  projectId: "yw-photos-viewer",
  storageBucket: "yw-photos-viewer.appspot.com",
  messagingSenderId: "833693672793",
  appId: "1:833693672793:web:01713a23d8630a2fa59848"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()


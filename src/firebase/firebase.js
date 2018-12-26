import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// Send Contact Form Messages to Database
export const sendMessage = (values) => {
  setTimeout(() => {
      const name = values.name
      const email = values.email
      const message = values.textarea
      firebase.auth().signInAnonymously()
      .then(user => {
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;


          // create todays date ----
          var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth()+1; //January is 0!

          var yyyy = today.getFullYear();
          if(dd<10){
              dd='0'+dd;
          } 
          if(mm<10){
              mm='0'+mm;
          } 
          var today = dd+'/'+mm+'/'+yyyy;
          // -------------------------
          const messageData = {
            username: name,
            email: email,
            message: message,
            timestamp: today
          }
      
              database.ref('/messages')
              .push(messageData)
           
          
      })
      .catch(function(error) {
            // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
            // ...
      });
}, 500);
}
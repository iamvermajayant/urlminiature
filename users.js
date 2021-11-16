

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import {getDatabase ,set, ref } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDZtpY81yhuvNI-AHti_lg1SKKS4Twx7J8",
    authDomain: "authentication-ad56e.firebaseapp.com",
    projectId: "authentication-ad56e",
    databaseURL : "https://authentication-ad56e-default-rtdb.firebaseio.com/",
    storageBucket: "authentication-ad56e.appspot.com",
    messagingSenderId: "424586587050",
    appId: "1:424586587050:web:72f1fda2d42fa2cc32d9d3",
    measurementId: "G-CTC8H0NXK9"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);  

  onAuthStateChanged(auth,(user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.email;
      console.log(uid);
      document.getElementById("uservalue").innerHTML = user.email;
      // ...    
    } else {
      // User is signed out
      // ...
      location.replace("login.html");
    }
  });
  

  const logout = document.getElementById("logout");
  logout.addEventListener("click", () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        location.replace("login.html");
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
})
  

//console.log(email);
// const user = auth.currentUser;
// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.

//   const email = user.email;
//   console.log(email);

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;
// }

// console.log(user);
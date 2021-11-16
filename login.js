//animation effect 
//overlay buttons

const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());


 
 //sign up functionality
 // Import the functions you need from the SDKs you need
 
 import {initializeApp} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
 import {getDatabase ,set, ref } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";


 //import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
 //import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getDatabase(app);
 //const analytics = getAnalytics(app);


 
    const btn = document.getElementById("btn1");
    btn.addEventListener("click", ()=>{
    
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value    
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // account created 
    const user = userCredential.user;
    const eror = document.getElementById("error");
    eror.innerText = "successful";
    
    setTimeout(() => {location.reload();}, 5000);

   


    // ...
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode + errorMessage);

    const eror = document.getElementById("error");
    eror.innerText = error.message;
    

    setTimeout(() => {eror.style.display = "none";}, 5000);
    
  });
 })

 btn.addEventListener('click', (email) => {
  email = document.getElementById("email").value
  const Name =document.getElementById("name").value
  set(ref(db, 'users/'+ Name), {
    pkey : Name,
    username : email
  })
  .then(() => {
    console.log("Success");
  })
  .catch(() => {
    console.log("unsuccessfull" + error);
  })
  //console.log("done");
});
   
  


 
    const button = document.getElementById("signin");
    button.addEventListener("click", () =>{
      
      const email = document.getElementById("signinemail").value
      const password = document.getElementById("signinpassword").value

       signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user signed in");
        location = "index.html";
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        const eror = document.getElementById("signinerror");
        eror.innerText = errorMessage;
        
        //console.log(errorCode + " " + errorMessage);

        setTimeout(() => {eror.style.display = "none";}, 5000);
      });
 
    })




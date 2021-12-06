import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6oVYz3Ga3n1E2NqrHL22YYQHLfOvTvdU",
  authDomain: "hackathon-21a2b.firebaseapp.com",
  databaseURL: "https://hackathon-21a2b-default-rtdb.firebaseio.com",
  projectId: "hackathon-21a2b",
  storageBucket: "hackathon-21a2b.appspot.com",
  messagingSenderId: "1070463052326",
  appId: "1:1070463052326:web:a7389594602f89a6edd4e7",
  measurementId: "G-T2QC37DLEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
let userLogin = (obj) => {
  console.log(obj);
};
// let dispatch=.dispatch
// console.log(dispatch);
let signUp = (obj, navigate) => {
  return (dispatch) => {
    console.log(obj);
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let uid = user.uid;
        console.log(user,uid);
        console.log(uid);
        navigate("/");
        dispatch({
          type: "SIGNUPDATA",
          payload:uid,
        });
    
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorMessage,"errar");
        console.log("erars");
        // ..
      });
  };
};

export { userLogin, signUp };

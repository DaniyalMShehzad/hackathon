import { signOut } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, push , child, get } from "firebase/database";
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
// let dispatch=.dispatch
// console.log(dispatch);
let userLogin = (dispatch, obj, navigate) => {
  console.log(obj);
  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      let uid = user.uid;
      console.log(user, uid);
      dispatch({
        type: "LOGIN",
        payload: obj,
      });
      navigate("/navbar");

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert(errorMessage,"errar");
      console.log("erars");
      // ..
    });
};


// let forgetpassword=()=>{
// const user = auth.currentUser;
// const newPassword = getASecureRandomPassword();

// updatePassword(user, newPassword).then(() => {
//   // Update successful.
// }).catch((error) => {
//   // An error ocurred
//   // ...
// });
// }
// let dispatch=.dispatch
// console.log(dispatch);
let signUp = (dispatch, obj, navigate) => {
  // return (dispatch) => {
  console.log(obj);
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      let uid = user.uid;
      console.log(user, uid);
      let newobj = { ...obj, uid }
      console.log(newobj);
      const db = getDatabase();
      set(ref(db, 'authentication/' + newobj.uid), {
        newobj

      }).then((res) => {
        console.log(res)
        // dispatch({
        //   type: "STUDENTAUTHENTICATION",
        //   ...obj,
        // })
      })
      dispatch({
        type: "SIGNUPDATA",
        payload: newobj,
      });
      console.log(uid);
      navigate("/navbar");

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, "errar");
      console.log("erars");
      // ..
    });
  // };
};


let useruid = (setLoader, dispatch,navigate) => {
  setLoader(true);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      const dbRef = ref(getDatabase());
      get(child(dbRef, `authentication/${uid}/newobj`)).then((snapshot) => {
        // if (snapshot.exists()) {
          console.log(snapshot.val());
          let uidData= {...snapshot.val()}
        // }
        dispatch({
          type: "USERUIDDATA",
          payload: uidData,
        })
        // setUserLogin(true);
        // setUserData(location.state);
        // getData();
      })
      setLoader(false);
    } else {
      console.log("error")
      navigate("/")
    }
  });
}

let signout = (navigate) => {
  signOut(auth).then(() => {
    console.log("Sign-out successful");

  }).catch((error) => {
    console.log("An error happened.",error);
    navigate("/")
  });
}
export { userLogin, signUp, signout, useruid };

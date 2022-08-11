import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBkeRh_rE0eeC0IxsV9wIWtGimPEhI_nMY",
    authDomain: "login-f98c3.firebaseapp.com",
    projectId: "login-f98c3",
    storageBucket: "login-f98c3.appspot.com",
    messagingSenderId: "1024488484854",
    appId: "1:1024488484854:web:98f468b5bae727992e61d7"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const db = app.firestore();
  
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  const signInWithGoogle = async () => {
    try {
      const res = await auth.signInWithPopup(googleProvider);
      const user = res.user;
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
      if (query.docs.length === 0) {
        await db.collection("users").add({
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const logout = () => {
    auth.signOut();
  };
  
  export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
  };
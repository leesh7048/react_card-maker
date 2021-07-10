import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    console.log(providerName);
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    // authProvider.addScope("repo");
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
  logout() {
    firebase.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}
export default AuthService;

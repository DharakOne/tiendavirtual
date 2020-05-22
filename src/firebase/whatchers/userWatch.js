import {auth} from "../firebaseConfig"

export function userChangedWatch(){
    auth.onAuthStateChanged(function(user) {
  if (user) {
    console.log("user email:",user.email)
    console.log("user placeholder:",user.displayName)
  } else {
    console.log("Noy exite usuario que inicio sesión ")
  }
});
}


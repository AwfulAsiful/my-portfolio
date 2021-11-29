import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebase.conig"

const initializeFirebase=()=>{
    initializeApp(firebaseConfig);
}
export default initializeFirebase;
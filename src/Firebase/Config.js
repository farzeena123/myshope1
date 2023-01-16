
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyBmQZtZSRfaMz6PBCFmm9drQ34_L62p_hM",
  authDomain: "shopee-d5fba.firebaseapp.com",
  projectId: "shopee-d5fba",
  storageBucket: "shopee-d5fba.appspot.com",
  messagingSenderId: "1069874599270",
  appId: "1:1069874599270:web:2626c24b77ead534e164a7",
  measurementId: "G-TSPFX1SX5G"
}
const app =initializeApp(firebaseConfig);

 export const auth = getAuth(app)

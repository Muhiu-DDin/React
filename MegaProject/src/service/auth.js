import { auth ,userCollection } from "../config/config.js"
import { setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export class AuthService {
    async createAccount({ email, password, userName }) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userId = userCredential.user.uid;
            const docRef = await setDoc(doc(userCollection , userId ) , {
                userName , email , userId
            });
            return userCredential.user

        } catch (e) {
            console.log("Creating account error =>", e);
            return null;
        }
    }

    async loginAccount({ email, password }) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("user logged in");
            return userCredential.user;
        } catch (e) {
            console.log("Error in login =>", e);
            return null;
        }
    }

    async getUser() {
        return new Promise((resolve) => {
            onAuthStateChanged(auth, (user) => {
                resolve(user); 
            });
        });
    }

    async logout() {
        try {
            await signOut(auth);
            console.log("user logged in");
        } catch (e) {
            console.log("Error in logging out =>", e);
        }
    }
}

export const authservice = new AuthService();

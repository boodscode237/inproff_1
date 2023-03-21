import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateEmail,
    updatePassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    auth, db
} from "../utils/firebase/firebase-utils";
import {
    collection,
    addDoc, doc, setDoc
} from "firebase/firestore";

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState()
    const [error, setError] = useState("")
    useEffect(() => {
        const currUser = auth.onAuthStateChanged((authUser) => {
            setUser(authUser)
        })
        //unsubscribe
        return currUser
    }, [])


    //signup
    const register = async (email, password, user) => {
        const {leaderName,leaderLastName, leaderPatronymic, teamName, teamEmail, teamInstitution, teamCity,
            teamMembers, username, terms} = user
        setError("")
        createUserWithEmailAndPassword(auth, email, password)
            .then(
            async (result) => {
                console.log('user details', result)
                try{
                    const docRef = await addDoc(collection(db, "users"), {
                        userId: `${result.user.uid}`,
                        displayName: `${leaderName} ${leaderLastName} ${leaderPatronymic}`,
                        email: teamEmail,
                        teamName,
                        teamInstitution,
                        teamCity,
                        teamMembers,
                        username,
                        terms,
                    })
                    alert(`Спасибо ${result.user.email}, что присоединились к нашему конкурсу`)
                    console.log("Document written UID: ", docRef.id)
                } catch (e) {
                    console.error("Error adding document ",e)
                }
            }
        )
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth)
    }

    function updateUserEmail(user, email) {
        return updateEmail(user, email)
    }

    function updateUserPassword(user, password){
        return updatePassword(user, password)
    }

    function forgotPassword(email){
        return sendPasswordResetEmail(auth, email)
    }

    return(
        <AuthContext.Provider value={{user, login, logout, updateUserEmail, updateUserPassword, register, forgotPassword}}>
            {children}
        </AuthContext.Provider>
    )
}
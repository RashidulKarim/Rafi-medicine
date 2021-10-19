import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseInit from "../Pages/Login/Firebase/Firebase.init";

firebaseInit()

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [successMassage, setSuccessMassage] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        .then(res => {
            setError('')
            setSuccessMassage('Successfully login')
        }).catch(err => {
            setError(err.message)
            setSuccessMassage('')
        })
    }

    const signUp = (name, email, password) => {
        if(name && email && password){
            return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                setSuccessMassage("Your account is Create Successfully.")
                updateProfile(auth.currentUser, {
                    displayName: name,
                  })
                
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                setSuccessMassage('')
            })
        }else{
            setError("Please fill up all Required field.")
        }
       ;
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            setError('')
            setSuccessMassage('Successfully login')
        }).catch(err => {
            setError(err.message)
            setSuccessMassage('')
        })
    }

    const logOut = () => {
        signOut(auth) 
        .then(res => {
            setError('')
            setSuccessMassage('')
        }).catch(err => {
            setError(err.message)
            setSuccessMassage('')
        })
    }



    useEffect(()=>{
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              setIsLoading(false)
            } else {
              setUser({})
              setIsLoading(false)
            }
          });
    },[])
    return {
        signInWithGoogle,
        logOut,
        user,
        signUp,
        signIn,
        isLoading,
        error,
        successMassage
    }
};

export default useFirebase;
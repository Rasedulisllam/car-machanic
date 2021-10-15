import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup,GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";



initializeAuthentication()
const auth=getAuth()

const useFirebase=()=>{
    const [user,setUser]=useState();
    const [err,setErr]=useState();
    const [isLoading,setIsLoading]=useState(true);

    // google sign in system
    const GoogleSignIn=()=>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            
    }

    // obzerbar system
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
            else{
              setUser({})
            }
            setIsLoading(false)
          });
          return ()=> unsubscribe;
    },[])

    // logout system
    const Logout=()=>{
        setIsLoading(true)
        signOut(auth)
          .then(() => {
            setUser({})
          })
          .catch((error) => {
            setErr(error.message)
          })
          .finally(()=> setIsLoading(false))
    }


    return {
        user,
        setUser,
        err,
        setErr,
        isLoading,
        setIsLoading,
        GoogleSignIn,
        Logout
    }
}

export default useFirebase;
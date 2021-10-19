import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useState,useEffect } from "react";
import initializeAuthenitcation from "../../firebase/firebase.init";

initializeAuthenitcation()

const useFirebase=()=>{
    const [Email,setemail]=useState('')
const [password,setpassword]=useState('')
    const [user,setuser]=useState({})
    const [error,seterror]=useState('')
    const [isLoading,setisLoading]=useState(true)
    const auth = getAuth();

    const signInUsingGoogle=()=>{
      setisLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        
        .then((result) => {
            
            setuser(result.user)
            
          })
          .catch((error) => {
            
            seterror(error.email)
            
          })
          .finally(()=>setisLoading(false))

    }
    const logOut=()=>{
      setisLoading(true)
        signOut(auth).then(() => {
          setuser({})
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setisLoading(false))

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
                setuser(user);
              
            }
            setisLoading(false)
          });
    }, [])



    const handleEmailChange=(e)=>{
        setemail(e.target.value);
    
    }
    const handlePasswordChange=(e)=>{
        setpassword(e.target.value);
    
    }
    const handleRegister=e=>{
        e.preventDefault()
       if(password.length<6){
        seterror('Plassword Must be at least 6 characters long')
       }
        
        createUserWithEmailAndPassword(auth, Email, password)
        setisLoading(true)
        .then((userCredential) => {
             
            setuser(userCredential.user);
            seterror('')
          })
          .catch((error) => {
            
            seterror(error.message);
            
          })
          .finally(()=>setisLoading(false))
          console.log(Email,password);
    }

const signInWithEmailAndPass=(e)=>{
  e.preventDefault()
  signInWithEmailAndPassword(auth, Email, password)
  setisLoading(true)
  .then((userCredential) => {
             
    setuser(userCredential.user);
    seterror('')
  })
  .catch((error) => {
    
    seterror(error.message);
    
  })
  .finally(()=>setisLoading(false))
  
}





return {
    user,
    error,
    isLoading,
    signInUsingGoogle,
    logOut,
    handleEmailChange,
    handlePasswordChange,
    handleRegister,
    signInWithEmailAndPass

}
}

export default useFirebase;
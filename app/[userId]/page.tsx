"use client"
import React, {useEffect, useState} from 'react'
import { getDoc, getFirestore, doc} from 'firebase/firestore'
import app from '../Shared/firebaseConfig'
import UserInfo from '../components/Userinfo'

function Profile({params}:any) {
  const db = getFirestore(app)
  const [userInfo, setUserInfo] = useState()

  useEffect(() => {
    console.log(params.userId.replace('%40', '@'))
    
    if(params){
      getUserInfo(params.userId.replace('%40', '@'))
    }
  }, [params])

  const getUserInfo = async(email:any) =>{
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
      setUserInfo(docSnap.data())
    }else{
      console.log("No such document")
    }
  }

  return (
    <div>
    {userInfo?
    <div>
     <UserInfo userInfo={userInfo} />
    
     
     </div> :null}
   </div>
  )
}

export default Profile

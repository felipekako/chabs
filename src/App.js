import React, {useEffect, useState}from 'react';
import  {useAuthState}from 'react-firebase-hooks/auth';
import  { auth, Auth, db }from './services/firebase';
import  Login from './components/login';
import  Loading from './components/loading';

 const App = () => {

const [user, loading] = useAuthState(auth);

useEffect(() =>{
  if(user) {
    db.collection("user").doc(users.uid).set({
      email: user.email,
      photoURL:user.photoURL,
    });
  }
}, [user]);

  if(loading) return <Loading/>;

  if (!user) return <login />;

  return (
    <div>App</div>
  )
}

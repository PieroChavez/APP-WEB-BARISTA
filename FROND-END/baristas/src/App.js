import './App.css';
import React, {useState} from 'react';

import Home from './screens/Home';
// eslint-disable-next-line no-unused-vars
import Login from './screens/login';

import firebaseApp from './Firebase/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const auth = getAuth(firebaseApp);

function App() {
  const[ user, setUser]= useState (null);

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase){
      setUser(usuarioFirebase);
    }
    else{
      setUser(null);
    }
    
  }
//
)
  
  return <> { user? <Home/>: <Login/> } </>;



}


export default App;

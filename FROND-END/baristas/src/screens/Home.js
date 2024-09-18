// src/pages/Home.js

import React from 'react';
import firebaseApp from '../Firebase/credenciales';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(firebaseApp);


function Home() {
  return (
    <div>
     home


    <button onClick={() => signOut(auth)}> cerrar sesión</button>

          
    </div>
  )
}

export default Home;
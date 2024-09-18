import React, {useState} from 'react';
import firebaseApp from '../Firebase/credenciales';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

//import {getFirestore, setDoc} from "firebase/firestore";


const auth = getAuth(firebaseApp);



function Login() {
  //const firestore =getFirestore(firebaseApp);
  const[isRegistrando, setIsRegistrando] = useState(false);

  async function registrarUsuario( email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(auth, email, password).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
        console.log(infoUsuario.user.uid);
       // const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
       // setDoc(docuRef, {correo: email, rol: rol});

  }
 // 
  function submitHandler(e){
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    console.log("submit", email, password, rol);

    if (isRegistrando) {
      //registrar
      registrarUsuario(email, password,rol);
      
    } else {
      // Login
      signInWithEmailAndPassword(auth,email, password)
    }
  }

  return (
    <div>
       <h1>{isRegistrando? "Registrate": "INICIA SECION P MANO"} </h1>



      <from onSubmit={submitHandler}>
        <label>
            correo:
            <input type='email' id="email" />

        </label>

        <label> 
          contraseña:
          <input type='password' id="password"/>
        </label>

        <label>
          Rol:
          <select id="rol">
            <option value="admin"> administrador</option>  
            <option value="user"> Usuario</option>  
          </select>
        </label>

        <input
        type="submit"
        value={isRegistrando ? "registrar": "iniciar secion"}
        />


      </from>
         <button onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando? "Ya temgo una cuenta": "quiero registrarme"}
         </button>
      
    </div>
  )
}

export default Login;

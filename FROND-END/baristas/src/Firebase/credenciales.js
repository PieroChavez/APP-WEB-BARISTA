//import { initializeApp} from "firebase/app";

// Añade las credenciales

//      const firebaseConfig = {
//            apiKey: "",
//            AuthDomain: "",
//            storageBucket: "",
//            messagingSenderId: "",
//            appId: "",
//            
//            
//        };
//        
//        // inicializamos la app y guardamos en Firebase
//        const firebaseApp = initializeApp(firebaseConfig);
//        //´Exportamos FirebaseApp para poder utilizarla en cualquier lugar de la aplicacion
//        export default firebaseApp;



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFDuKWJ9gWU6rqisTMqQXTlRnsYMUnuXY",
  authDomain: "baristas-app-94ea6.firebaseapp.com",
  projectId: "baristas-app-94ea6",
  storageBucket: "baristas-app-94ea6.appspot.com",
  messagingSenderId: "287494231792",
  appId: "1:287494231792:web:096f4cb3df96c6595f9435",
  measurementId: "G-WW459EWV76"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebaseApp;
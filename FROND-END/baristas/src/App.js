import './App.css';
import LoginButton from './components/loginButton';
import LogoutButton from './components/logout';
import Profile from './components/profile';
import { useAuth0 } from '@auth0/auth0-react';



function App(){
  const { isAuthenticated, isLoading } = useAuth0(); 
  if (isLoading) {
    return <div>Loading...</div>; // Mientras Auth0 verifica el estado de autenticación
  }
  


  return (
    <div className="App">
    <h1> APLICATIONS</h1>

    {isAuthenticated ? <LogoutButton/> : <LoginButton/> }
    <Profile/>
   


    </div>
  );


}


export default App;

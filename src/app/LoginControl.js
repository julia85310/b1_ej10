import {useState} from 'react';

export default function LoginControl(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin() {
        setIsLoggedIn(!isLoggedIn);  
    }

    return (
        <div>
          <button onClick={handleLogin}>
            {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
          </button>
        </div>
      );
}
import React, { useCallback, useState } from 'react';
import jwt from 'jsonwebtoken'

export const UserContext = React.createContext();

function getToken() {
  return localStorage.getItem('auth')
}

export default function UsersProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());
  const [user, setUser] = useState(jwt.decode(getToken(), {complete: true}));
  const [message, setMessage] = useState("");

  console.log(user)

  const login = useCallback((email, password) => {
    fetch('http://localhost:8080/api/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    })
      .then(response => response.json())
      .then(data => {
        
        // debugger;
        if(data.user){
          setUser(data.user);
          setIsLoggedIn(true);
          localStorage.setItem('auth', data.token);

        }else{
          setMessage(data.message);
        }
      });
  }, []);

  console.log(isLoggedIn);

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      isLoggedIn,
      setIsLoggedIn,
      login,
      message,
      setMessage,
    }}>
      {children}
    </UserContext.Provider>
  );
}

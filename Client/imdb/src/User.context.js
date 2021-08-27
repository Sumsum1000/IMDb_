import React, { useCallback, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'
export const UserContext = React.createContext();
function getToken() {
  return localStorage.getItem('auth')
}
export default function UsersProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());
  const [user, setUser] = useState(jwt.decode(getToken(), {complete: true}).payload);
console.log(jwt.decode(getToken(), {complete: true}))

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
        debugger;
        setUser(data.user);
        setIsLoggedIn(true);
        localStorage.setItem('auth', data.token)
      });
  }, []);

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      isLoggedIn,
      login
    }}>
      {children}
    </UserContext.Provider>
  );
}

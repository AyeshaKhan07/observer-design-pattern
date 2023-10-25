import React, { useEffect, useState } from 'react';
import "../styles/header.css";
import LoginObservable from '../observers/LoginObservable';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    LoginObservable.subscribe(isLoggedInValue => {
        setIsLoggedIn(isLoggedInValue)
    })
},[LoginObservable])

  return (
    <header className="header">
      <h1>Learning observer design pattern</h1>
      {isLoggedIn ? (
        <button onClick={() => {LoginObservable.notify(false)}}>Logout</button>
      ) : (
        <button onClick={() => {LoginObservable.notify(true)}}>Login</button>
      )}
    </header>
  );
};

export default Header;
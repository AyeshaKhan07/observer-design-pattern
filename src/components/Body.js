import React, { useEffect, useState } from 'react';
import "../styles/body.css";
import LoginObservable from '../observers/LoginObservable';

const Body = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        LoginObservable.subscribe(isLoggedInValue => {
            setIsLoggedIn(isLoggedInValue)
        })
    },[LoginObservable])

  return (
    <div className="body">
      {isLoggedIn ? <p>Welcome</p> : <p>Please login</p>}
    </div>
  );
};

export default Body;

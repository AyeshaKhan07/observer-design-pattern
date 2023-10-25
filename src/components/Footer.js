import React, { useEffect, useState } from 'react';
import "../styles/footer.css";
import LoginObservable from '../observers/LoginObservable';

const Footer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        LoginObservable.subscribe(isLoggedInValue => {
            setIsLoggedIn(isLoggedInValue)
        })
    },[LoginObservable])

    return (
        <footer className="footer">
            {isLoggedIn ? <p>Let's learn together</p> : null}
            <p>&copy; {new Date().getFullYear()} Learning observer design pattern</p>
        </footer>
    );
};

export default Footer;

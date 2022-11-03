import React from 'react';
import { Link, useLocation } from "react-router-dom";
import SignIn from './SignIn';

export function Home() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </nav>
            <h1>Home</h1>
        </div>
    );
}

export function Login() {
    return (
        <SignIn></SignIn>
    );
}

export function Whoops404() {
    let location = useLocation();
    console.log(location);
    return (
      <div>
        <h1>
            Resource not found at {location.pathname}
        </h1>
      </div>
    );
}

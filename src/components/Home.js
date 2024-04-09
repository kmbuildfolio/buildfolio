import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import img from '../assets/intro-bg.jpg';
import { isLogin } from '../authService/auth';
import CookieConsent from 'react-cookie-consent';
import { Cookies } from 'react-cookie-consent';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const hostname = window.location.hostname;
  const [showCookieConsent,setShowCookieConsent] = useState(false);
    const navigate = useNavigate();
  // Define functions for handling authentication and form submission
  const handleLoginPage  = () => {
    // Add your authentication logic here
    navigate("/login");
  };

  const handleFormPage = () =>{
    if(isLogin()){
        navigate("/form");
    }
    else{
        navigate('/login');
    }
  }

  useEffect(()=>{
    if(!Cookies.get('CookieConsent')){
      setShowCookieConsent(true);
    }
  },[])

  return (
    <div>
        <NavBar/>
        {showCookieConsent && <CookieConsent
        debug={true}
        extraCookieOptions={{ domain: hostname }}
        style={{ background: "#f1f2f1", color: "black" }}
        buttonStyle={{ backgroundColor:'#0c3059',color: "white", fontSize: "13px" }}
        buttonText="OKAY!"
      >
        Enable Third Party Cookies to Authenticate
      </CookieConsent>}
        <Header handleFormPage={handleFormPage}/>
    </div>
  );
};

export default Home;

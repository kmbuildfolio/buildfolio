import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import img from '../assets/intro-bg.jpg';
import { isLogin } from '../authService/auth';

const Home = () => {
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

  return (
    <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
        <NavBar/>
        <Header handleFormPage={handleFormPage}/>
    </div>
  );
};

export default Home;

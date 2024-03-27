import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin, verifyUserStatus } from '../../service/FormService';
import { getOTP } from '../../service/PersonService';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveUser } from '../../authService/auth';
import SignupPage from "./SignUp/SignupPage";
import LoginPage from "./Login/LoginPage";
import { AUTH_MAIL } from '../../service/helper';
import Loading from '../../components/Loading';

const LoginSignUp = ({ setLoginForm, setVerificationPage, setPerson, loading, setLoading }) => {
    const [loginPage, setLoginPage] = useState(true);
    const [loginPerson, setLoginPerson] = useState({
      userNameOrEmail: "",
      pass: "",
    });
    const [registerPerson, setRegisterPerson] = useState({
      userName: "",
      email: "",
      password: "",
    });
    const [loginErrorMsg, setLoginErrorMsg] = useState(null);
    const [registerErrorMsg, setRegisterErrorMsg] = useState(null);
    const navigate = useNavigate();
  
    const onSignUp = (person) => {
      setPerson(person);
      setLoading("Sending OTP...");
      try {
        verifyUserStatus(registerPerson.email, registerPerson.userName).then(
          (data) => {
            setLoading(null);   
            if (data.success) {
              alert("OTP sent from "+AUTH_MAIL);
              setVerificationPage(true);
              getOTP(registerPerson.email)
                .then((res) => {
                  if (!res.success) {
                    setRegisterErrorMsg(res.message);
                    return;
                  }
                })
                .catch((error) => {
                  toast.error("Something Went Wrong");
                });
            } else {
              setRegisterErrorMsg(data.message);
              return;
            }
          })
          .catch(err =>{
            setLoading(null);
            toast.error("Something Went Wrong");
            return;
          })
      } catch (error) {
        console.error(error);
      }
    };
  
    const onSignIn = (person) => {
      try {
        userLogin(person)
          .then((data) => {
            if (data.success) {
              saveUser(data);
              toast.success("Login Succesfully !!");
              navigate("/");
              return;
            } else {
              setLoginErrorMsg(data.message);
              return;
            }
          })
          .catch((err) => {
            if (err.response.data) {
              setLoginErrorMsg(err.response.data.message);
            } else {
              toast.error("Something Went Wrong");
            }
          });
      } catch (error) {
        console.error(error);
      }
    };
  
    const validateForm = () => {
      if (registerPerson.userName.length < 4) {
        setRegisterErrorMsg("Username Contains At Least 4 Character");
        return false;
      }
      if (!validator.matches(registerPerson.userName, /^[a-zA-Z]/)) {
        setRegisterErrorMsg("Username First Character Must Be Alphabet");
        return;
      }
      if (!validator.matches(registerPerson.userName, /^[a-z][a-z0-9]*$/)) {
        setRegisterErrorMsg("UserName Contains LowerCase Alphabets And Digits");
        return false;
      }
      if (!validator.isEmail(registerPerson.email)) {
        setRegisterErrorMsg("Fill Email Field Carefully !!");
        return false;
      }
      if (registerPerson.password.length < 5) {
        setRegisterErrorMsg("Password Length Must Be 5");
        return false;
      }
      return true;
    };
  
    const handleSignUpClick = () => {
      if (!validateForm()) {
        toast.error("Some Inputs May Not Validate !!");
        return;
      }
      setRegisterErrorMsg(null);
      onSignUp(registerPerson);
    };
  
    const handleSignInClick = () => {
      if (loginPerson.userNameOrEmail.length < 4) {
        setLoginErrorMsg("UserName Or Email At Least 4 Character");
        return;
      }
      if (loginPerson.pass.length < 4) {
        setLoginErrorMsg("Password Have At Least 5 Letters");
        return;
      }
      setLoginErrorMsg(null);
      onSignIn(loginPerson);
    };
    return (
      <div className='w-full'>
        <ToastContainer position='top-center'/>
        <div>
          {loginPage ? (
            <LoginPage
              setLoginPage={setLoginPage}
              isLoginPage={loginPage}
              setLoginPerson={setLoginPerson}
              loginPerson={loginPerson}
              loginErrorMsg={loginErrorMsg}
              handleSignInClick={handleSignInClick}
              setLoginForm={setLoginForm}
            />
          ) : (
            <SignupPage
              setLoginPage={setLoginPage}
              isLoginPage={loginPage}
              setRegisterPerson={setRegisterPerson}
              registerPerson={registerPerson}
              registerErrorMsg={registerErrorMsg}
              handleSignUpClick={handleSignUpClick}
            />
          )}
        </div>
      </div>
    );
  };
  
  export default LoginSignUp;
  
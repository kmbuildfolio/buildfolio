import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin, verifyUserStatus } from '../../service/FormService';
import { getOTP } from '../../service/PersonService';
import validator from 'validator';
import { toast } from 'react-toastify';
import { saveUser } from '../../authService/auth';
import SignupPage from "./SignUp/SignupPage";
import LoginPage from "./Login/LoginPage";
import { AUTH_MAIL } from '../../service/helper';
import { matches } from 'validator';

const LoginSignUp = ({ setLoginForm, setVerificationPage, setPerson, setLoading }) => {
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
        setLoading(' ');
        userLogin(person)
          .then((data) => {
            if (data.success) {
              saveUser(data);
              toast.success("Login Succesfully !!");
              navigate("/");
            } else {
              setLoginErrorMsg(data.message);
            }
            setLoading(null);
            return;
          })
          .catch((err) => {
            console.log(err);
            if (err.response && err.response.data) {
              setLoginErrorMsg(err.response.data.message);
            } else {
              toast.error("Something Went Wrong");
            }
            setLoading(null);
          });
      } catch (error) {
        console.error(error);
      }
    };
  
    const validateForm = () => {
      if (!matches(registerPerson.userName,/^.{3,35}$/)) {
        setRegisterErrorMsg("Username Contains 3 to 35 Characters");
        return false;
      }
      if (!matches(registerPerson.userName, /^[a-zA-Z]/)) {
        setRegisterErrorMsg("Username First Character Must Be Alphabet");
        return;
      }
      if (!matches(registerPerson.userName, /^[a-z][a-z0-9]*$/)) {
        setRegisterErrorMsg("UserName Contains LowerCase Alphabets And Digits");
        return false;
      }
      if (!validator.isEmail(registerPerson.email)) {
        setRegisterErrorMsg("Fill Email Field Carefully !!");
        return false;
      }
      if (!matches(registerPerson.password,/^.{5,25}$/)) {
        setRegisterErrorMsg("Password Contains 5 to 25 Characters");
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
  
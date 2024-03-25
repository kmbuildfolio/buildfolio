import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import LoginSignup from "./LoginSignup/LoginSignup";
import Info from "./Info";
import OTPForm from "./OTPForm";
import ForgotPassword from "./ForgotPassword";
import img from "../assets/intro-bg.jpg";
import { savePerson } from "../service/FormService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";

const Authentication = () => {
  const [verificationPage, setVerificationPage] = useState(false);
  const [loginForm, setLoginForm] = useState(true);
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSaveUser = (OTP) => {
    setLoading("Verifying...");
    if (person != null) {
      try {
        savePerson(person, OTP)
          .then((res) => {
            if (res.success) {
              setVerificationPage(false);
              setLoginForm(true);
              toast.success("SignUp Successfully");
              setLoading(null);
            } else {
              toast.error(res.message);
            }
          })
          .catch((err) => {
            toast.error("Something Went Wrong");
          });
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}>
      <ToastContainer position="top-center" />
      <NavBar />
      <div className="relative">
        {loading && <Loading content={loading} />}
        <div style={{filter:(loading ? "blur(0.8px)" : "none")}}>
          {loginForm ? (
            <div className="w-full flex h-[calc(100vh-50px)]">
              <div className="w-1/2 md:flex align-middle hidden self-center">
                <Info setLoginForm={setLoginForm} />
              </div>
              <div className="md:w-2/5 p-3 lg:p-8 w-full flex self-center">
                {!verificationPage ? (
                  <LoginSignup
                    setLoginForm={setLoginForm}
                    setVerificationPage={setVerificationPage}
                    setPerson={setPerson}
                  />
                ) : (
                  <OTPForm handleVerify={handleSaveUser} />
                )}
              </div>
            </div>
          ) : (
            <ForgotPassword setLoginForm={setLoginForm} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Authentication;

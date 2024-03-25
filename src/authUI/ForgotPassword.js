import React, { useState } from "react";
import ResetPassInfo from "./ResetPassInfo";
import ResetPass from "./ResetPass";
import OTPForm from "./OTPForm";
import ChangePass from "./ChangePass";
import { changePassword, sendOTP, verifyOTP } from "../service/PersonService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";
import { AUTH_MAIL } from "../service/helper";

const ForgotPassword = ({ setLoginForm }) => {
  const [step, setStep] = useState(1);
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmOTP, setConfirmOTP] = useState("");
  const [loading, setLoading] = useState(null);
  const handleResetPass = (OTP) => {
    setConfirmOTP(OTP);
    verifyUserOTP(OTP);
  };
  const verifyUserOTP = (OTP) => {
    setLoading("Verifying...");
    try {
      verifyOTP(confirmEmail, OTP)
        .then((data) => {
          if (!data.success) {
            toast.error(data.message);
          } else {
            setStep(3);
          }
          setLoading(null);
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    } catch (err) {
      console.error("Something Went Wrong");
    }
  };

  const verifyEmail = (email) => {
    alert("OTP sent from "+AUTH_MAIL);
    try {
      sendOTP(email)
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
          } else {
            toast.error(data.message);
          }
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    } catch (err) {
      console.error("Something Went Wrong");
    }
  };

  const handleSubmitEmail = (email) => {
    setConfirmEmail(email);
    verifyEmail(email);
    setStep(2);
  };

  const handleSubmitPass = (pass, confirmPass) => {
    setLoading("Modifying Password...");
    const credential = {
      email: confirmEmail,
      otp: confirmOTP,
      newPass: pass,
      confirmPass: confirmPass,
    };

    try {
      changePassword(credential)
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
            setLoginForm(true);
          } else {
            toast.error(data.message);
          }
          setLoading(null);
        })
        .catch((err) => {
          toast.error("Somthing Went Wrong");
        });
    } catch (err) {
      console.error("Somthing Went Wrong");
    }
  };

  return (
    <div className="flex justify-around h-[calc(100vh-50px)] relative">
      {loading && <Loading content={loading} />}
      <ToastContainer position="top-center" />
      {step === 1 ? (
        <ResetPass
          handleSubmitEmail={handleSubmitEmail}
          setLoginForm={setLoginForm}
        />
      ) : step === 2 ? (
        <div className="px-4 self-center flex md:w-2/5 w-full" style={{filter:(loading ? "blur(0.8px)" : "none")}}>
          <OTPForm handleVerify={handleResetPass} />
        </div>
      ) : (
        <div className="px-4 self-center flex md:w-2/5 w-full">
          <ChangePass handleOnSubmitPass={handleSubmitPass} />
        </div>
      )}
      <div className="md:w-1/2 hidden md:flex self-center">
        <ResetPassInfo setLoginForm={setLoginForm} />
      </div>
    </div>
  );
};

export default ForgotPassword;

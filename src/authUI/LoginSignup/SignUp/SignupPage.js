import Header from "../Header";
import Signup from "./Signup";

export default function SignupPage({
  setLoginPage,
  isLoginPage,
  setRegisterPerson,
  registerPerson,
  registerErrorMsg,
  handleSignUpClick,
}) {
  return (
    <div className="flex flex-col">
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
        setLoginPage={setLoginPage}
        isLoginPage={isLoginPage}
      />
      {registerErrorMsg && <span className="text-red-800 self-center">{registerErrorMsg}</span>}
      <Signup
        setRegisterPerson={setRegisterPerson}
        registerPerson={registerPerson}
        handleSignUpClick={handleSignUpClick}
      />
    </div>
  );
}

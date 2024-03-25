import Login from "./Login";
import Header from "../Header";

export default function LoginPage({
  setLoginPage,
  isLoginPage,
  setLoginPerson,
  loginPerson,
  loginErrorMsg,
  handleSignInClick,
  setLoginForm,
}) {
  return (
    <div className="flex flex-col">
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
        setLoginPage={setLoginPage}
        isLoginPage={isLoginPage}
      />
      {loginErrorMsg && (
        <div className="px-2 flex justify-center mt-4">
          <span className="text-red-800 self-center text-sm">{loginErrorMsg}</span>
        </div>
      )}
      <Login
        setLoginPerson={setLoginPerson}
        loginPerson={loginPerson}
        handleSignInClick={handleSignInClick}
        setLoginForm={setLoginForm}
      />
      <div className="self-center mt-2">
        {isLoginPage && (
          <p>
            Not a member?{" "}
            <span
              className="cursor-pointer text-[#9333ea] font-medium"
              onClick={() => {
                setLoginPage(!isLoginPage);
              }}
            >
              Register
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

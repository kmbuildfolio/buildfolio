import { useState } from "react";
import { loginFields } from "../constants";
import FormAction from "../FormAction";
import FormExtra from "../FormExtra";
import Input from "../Input";

const fields = loginFields;

export default function Login({
  setLoginPerson,
  loginPerson,
  handleSignInClick,
  setLoginForm
}) {

  const handleChange = (e) => {
    setLoginPerson({ ...loginPerson, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignInClick();
  };

  return (
    <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginPerson[field.name]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra setLoginForm={setLoginForm}/>
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}

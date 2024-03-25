import { useState } from "react";
import { signupFields } from "../constants";
import FormAction from "../FormAction";
import Input from "../Input";

const fields = signupFields;

export default function Signup({
  setRegisterPerson,
  registerPerson,
  handleSignUpClick,
}) {

  const handleChange = (e) =>
    setRegisterPerson({ ...registerPerson, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUpClick();
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={registerPerson[field.name]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}

"use client";
import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import React, { useState } from "react";

const Connexion = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("====================================");
    console.log(firstName);
    console.log("submitted");
    console.log("====================================");
  };
  console.log("====================================");
  console.log(firstName);
  console.log("====================================");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormField
          label={"First name"}
          isTextArea={false}
          state={firstName}
          inputName={"firstName"}
          setState={setFirstName}
          inputType={"text"}
        />
        <FormField
          label={"Last name"}
          isTextArea={false}
          inputName={"lastName"}
          setState={setLastName}
          state={firstName}
          inputType={"text"}
        />
        <FormField
          label={"Email"}
          isTextArea={false}
          inputName={"email"}
          setState={setEmail}
          state={firstName}
          inputType={"email"}
        />
        <FormField
          label={"Password"}
          isTextArea={false}
          inputName={"password"}
          setState={setPassword}
          inputType={"password"}
        />
        <CustomButton
          btnType={"submit"}
          title={"Sign Up"}
          disabled={false}
          containerStyle={"primary-btn"}
        />
      </form>
    </div>
  );
};

export default Connexion;

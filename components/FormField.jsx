import React from "react";

const FormField = ({
  label,
  isTextArea,
  inputName,
  inputType,
  placeholder,
  setState,
  state,
}) => {
  return (
    <div>
      <label>{label}</label>
      {isTextArea ? (
        <textarea
          name={inputName}
          placeholder={placeholder}
          value={state}
          onChange={(e) => setState(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
      ) : (
        <input
          type={inputType}
          name={inputName}
          placeholder={placeholder}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  );
};

export default FormField;

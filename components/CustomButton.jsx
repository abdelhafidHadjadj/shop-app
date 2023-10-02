import React from "react";

const CustomButton = ({
  btnType,
  title,
  disabled,
  containerStyle,
  handleClick,
}) => {
  return (
    <button
      type={btnType}
      disabled={disabled}
      className={containerStyle}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;

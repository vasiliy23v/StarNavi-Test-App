import React, { CSSProperties } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  handleFunc: () => void;
  style?: CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  handleFunc,
  style: customStyle,
  ...props
}) => {
  const defaultStyles: CSSProperties = {
    textTransform: "uppercase",
  };

  const mergedStyles: CSSProperties = customStyle
    ? { ...defaultStyles, ...customStyle }
    : defaultStyles;

  return (
    <button style={mergedStyles} onClick={handleFunc} {...props}>
      {title}
    </button>
  );
};

export default Button;

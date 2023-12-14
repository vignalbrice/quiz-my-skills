import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button = ({ ...rest }: ButtonProps) => <button {...rest} />;

export default Button;

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ ...rest }: InputProps) => <input {...rest} />;

export default Input;

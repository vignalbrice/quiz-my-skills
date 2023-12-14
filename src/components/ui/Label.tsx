import React from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  id: string;
  children: React.ReactNode;
};

const Label = ({ id, children, ...rest }: LabelProps) => {
  return (
    <label htmlFor={id} className="text-sm font-medium text-gray-700" {...rest}>
      {children}
    </label>
  );
};

export default Label;

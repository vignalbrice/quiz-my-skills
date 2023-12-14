import React from "react";
import Input from "./Input";
import Label from "./Label";
import Colors from "@/theme/colors";

type ToggleProps = React.HtmlHTMLAttributes<HTMLSpanElement> & {
  value: boolean;
};

const Toggle = ({ onClick, ...rest }: ToggleProps) => {
  return (
    <Label id="toggle" onClick={onClick} className="relative">
      <Input
        type="checkbox"
        className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
      />
      <span
        style={{
          background: Colors.purple,
        }}
        {...rest}
        className="w-14 h-8 flex items-center flex-shrink-0  p-2 rounded-full duration-300 ease-in-out after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-5 group-hover:after:translate-x-1"
      ></span>
    </Label>
  );
};

export default Toggle;

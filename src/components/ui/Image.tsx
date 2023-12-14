import React from "react";

type ImageProps = React.HtmlHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

const Image = ({ ...rest }: ImageProps) => <img {...rest} />;

export default Image;

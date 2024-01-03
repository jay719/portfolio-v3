import React from "react";

export const Heading = ({ text, className }) => (
  <h2 className={className}>{text}</h2>
);

export const SubText = ({ text }) => <h6>{text}</h6>;
export const Image = ({ src, alt, loading }) => (
  <img src={src} alt={alt} loading={loading} />
);
export const Link = ({
  href,
  children,
  className,
  target = null,
  rel = null,
}) =>
  target ? (
    <a href={href} className={className} target={target} rel={rel}>
      {children}
    </a>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );

// export default Link;

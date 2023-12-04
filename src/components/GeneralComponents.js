import React from "react";

export const Heading = ({ text, className }) => (
  <h2 className={className}>{text}</h2>
);

export const SubText = ({ text }) => <h6>{text}</h6>;
export const Image = ({ src, alt, loading }) => (
  <img src={src} alt={alt} loading={loading} />
);
export const Link = ({ href, children, className }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

// export default Link;

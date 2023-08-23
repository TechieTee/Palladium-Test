import React from "react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer>
      <p>copyright {year}</p>
    </footer>
  );
};

export default Footer;

import React from "react";

const Product = ({ important,
    name,
    type,
    desc,
    status,
    dateCreated}) => {
  return (
    <div className="product">
    
      <p>{name}</p>
      <p>{type}</p>
      <p>{desc}</p>
      <p style={{ color: important }}>{status}</p>
      <p>{dateCreated}</p>
    </div>
  );
};

export default Product;

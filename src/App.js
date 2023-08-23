import React from "react";
import './App.css';
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";
import productData from "./productData";


export default function App() {
  return (
    <div className="App">
      <Header />
      {productData.map((item) => (
        <Product
          key={item.id}
           important={item.status === "paid" ? "green" : "red"}
          name={item.name}
          type={item.type}
          desc={item.desc}
          status={item.status}
          dateCreated={item.dateCreated}
        
        />
      ))}
      <Footer />
    </div>
  );
}

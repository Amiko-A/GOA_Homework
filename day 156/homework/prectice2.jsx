import React from "react";
import "./style2.css"
import perfumeImg from "./image-product-desktop.jpg";

export default function ProductCard() {
  return (
    <div className="MainContainer">
      <div className="image">
        <img src={perfumeImg} alt="" />
      </div>

      <div className="details">
        <p className="paragraph">PERFUME</p>
        <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
        <p className="desc">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div className="price-conteiner">
          <span className="price">$149.99</span>
          <span className="oldPrice">$169.99</span>
        </div>

        <button className="btn">
          <span>🛒</span> Add to Cart
        </button>
      </div>
    </div>
  );
}

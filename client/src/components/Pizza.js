import React from "react";

export default function Pizza({ pizza }) {
  return (
    <div className="card">
      <img src={pizza.image} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.description}</p>
        <p className="card-text">
          <strong>Category: </strong>{pizza.category}
        </p>
        <div>
          <strong>Prices:</strong>
          <ul>
            {pizza.varients.map((varient) => (
              <li key={varient}>
                {varient}: ₹{pizza.prices[0][varient]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import pizzas from "../pizzasdata";
import Pizza from "../components/Pizza";

export default function Homescreen() {
  return (
    <div className="container">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.name}>
            <Pizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
}

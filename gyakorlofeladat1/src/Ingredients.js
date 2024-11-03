import "./App.css";
import React from "react";
import Ingredient from "./Ingredient";

class Ingredients extends React.Component {
  render() {
    return (
      <ul>
        {this.props.ingredients.map((item) => {
          return <Ingredient key={item} ingredient={item} />;
        })}
      </ul>
    );
  }
}

export default Ingredients;

import "./App.css";
import React from "react";
import Ingredients from "./Ingredients";

class Receipt extends React.Component {
  render() {
    return (
      <div className="Receipt">
        <b>Név:</b> {this.props.data.name}
        <br />
        <b>Hozzávalók:</b>
        <Ingredients ingredients={this.props.data.ingredients} />
        <b>Elkészítés:</b> {this.props.data.instructions}
        <br />
        <b>Nehézség:</b> {this.props.data.difficulty}
        <br />
      </div>
    );
  }
}

export default Receipt;

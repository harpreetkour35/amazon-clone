import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat format="+1 (###) ###-####" mask="_" />
    </div>
  );
}

export default Subtotal;

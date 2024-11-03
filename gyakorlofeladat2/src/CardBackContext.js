import React, { createContext, useState } from "react";

import CARD_BACK_1 from "./.assets/cards/card-back1.png";
import CARD_BACK_2 from "./.assets/cards/card-back2.png";
import CARD_BACK_3 from "./.assets/cards/card-back3.png";
import CARD_BACK_4 from "./.assets/cards/card-back4.png";

// Create the Context
export const CardBackContext = createContext();

// Create a Provider component
export function CardBackProvider({ children }) {
  const [cardBack, setCardBack] = useState(CARD_BACK_1); // This is the global state

  const toggleCardBack = (cardBack) => {
    setCardBack((newCardBack) => (newCardBack = cardBack));
  };

  return (
    <CardBackContext.Provider value={{ cardBack, toggleCardBack }}>
      {children}
    </CardBackContext.Provider>
  );
}

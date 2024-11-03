import { useContext } from "react";
import { CardBackContext } from "./CardBackContext";

function Card({ card, onClick }) {
  const { cardBack } = useContext(CardBackContext);

  return (
    <img
      src={card.flipped === 0 ? cardBack : card.cardfront}
      alt=""
      onClick={() => {
        onClick(card.id);
      }}
    />
  );
}

export default Card;

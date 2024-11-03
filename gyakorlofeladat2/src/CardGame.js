import CARD_BACK_1 from "./.assets/cards/card-back1.png";
import CARD_BACK_2 from "./.assets/cards/card-back2.png";
import CARD_BACK_3 from "./.assets/cards/card-back3.png";
import CARD_BACK_4 from "./.assets/cards/card-back4.png";
import CARD_HEARTS_1 from "./.assets/cards/card-hearts-1.png";
import CARD_HEARTS_2 from "./.assets/cards/card-hearts-2.png";
import CARD_HEARTS_3 from "./.assets/cards/card-hearts-3.png";
import CARD_HEARTS_4 from "./.assets/cards/card-hearts-4.png";
import CARD_HEARTS_5 from "./.assets/cards/card-hearts-5.png";
import CARD_HEARTS_6 from "./.assets/cards/card-hearts-6.png";
import CARD_HEARTS_7 from "./.assets/cards/card-hearts-7.png";
import CARD_HEARTS_8 from "./.assets/cards/card-hearts-8.png";
import CARD_HEARTS_9 from "./.assets/cards/card-hearts-9.png";
import CARD_HEARTS_10 from "./.assets/cards/card-hearts-10.png";
import CARD_HEARTS_11 from "./.assets/cards/card-hearts-11.png";
import CARD_HEARTS_12 from "./.assets/cards/card-hearts-12.png";
import CARD_HEARTS_13 from "./.assets/cards/card-hearts-13.png";
import CARD_CLUBS_1 from "./.assets/cards/card-clubs-1.png";
import CARD_CLUBS_2 from "./.assets/cards/card-clubs-2.png";
import CARD_CLUBS_3 from "./.assets/cards/card-clubs-3.png";
import CARD_CLUBS_4 from "./.assets/cards/card-clubs-4.png";
import CARD_CLUBS_5 from "./.assets/cards/card-clubs-5.png";
import CARD_CLUBS_6 from "./.assets/cards/card-clubs-6.png";
import CARD_CLUBS_7 from "./.assets/cards/card-clubs-7.png";
import CARD_CLUBS_8 from "./.assets/cards/card-clubs-8.png";
import CARD_CLUBS_9 from "./.assets/cards/card-clubs-9.png";
import CARD_CLUBS_10 from "./.assets/cards/card-clubs-10.png";
import CARD_CLUBS_11 from "./.assets/cards/card-clubs-11.png";
import CARD_CLUBS_12 from "./.assets/cards/card-clubs-12.png";
import CARD_CLUBS_13 from "./.assets/cards/card-clubs-13.png";
import CARD_DIAMONDS_1 from "./.assets/cards/card-diamonds-1.png";
import CARD_DIAMONDS_2 from "./.assets/cards/card-diamonds-2.png";
import CARD_DIAMONDS_3 from "./.assets/cards/card-diamonds-3.png";
import CARD_DIAMONDS_4 from "./.assets/cards/card-diamonds-4.png";
import CARD_DIAMONDS_5 from "./.assets/cards/card-diamonds-5.png";
import CARD_DIAMONDS_6 from "./.assets/cards/card-diamonds-6.png";
import CARD_DIAMONDS_7 from "./.assets/cards/card-diamonds-7.png";
import CARD_DIAMONDS_8 from "./.assets/cards/card-diamonds-8.png";
import CARD_DIAMONDS_9 from "./.assets/cards/card-diamonds-9.png";
import CARD_DIAMONDS_10 from "./.assets/cards/card-diamonds-10.png";
import CARD_DIAMONDS_11 from "./.assets/cards/card-diamonds-11.png";
import CARD_DIAMONDS_12 from "./.assets/cards/card-diamonds-12.png";
import CARD_DIAMONDS_13 from "./.assets/cards/card-diamonds-13.png";
import CARD_SPADES_1 from "./.assets/cards/card-spades-1.png";
import CARD_SPADES_2 from "./.assets/cards/card-spades-2.png";
import CARD_SPADES_3 from "./.assets/cards/card-spades-3.png";
import CARD_SPADES_4 from "./.assets/cards/card-spades-4.png";
import CARD_SPADES_5 from "./.assets/cards/card-spades-5.png";
import CARD_SPADES_6 from "./.assets/cards/card-spades-6.png";
import CARD_SPADES_7 from "./.assets/cards/card-spades-7.png";
import CARD_SPADES_8 from "./.assets/cards/card-spades-8.png";
import CARD_SPADES_9 from "./.assets/cards/card-spades-9.png";
import CARD_SPADES_10 from "./.assets/cards/card-spades-10.png";
import CARD_SPADES_11 from "./.assets/cards/card-spades-11.png";
import CARD_SPADES_12 from "./.assets/cards/card-spades-12.png";
import CARD_SPADES_13 from "./.assets/cards/card-spades-13.png";
import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { CardBackContext } from "./CardBackContext";

//  Random hátlap választása - új játéknál legyen új hátlap, de mindegyiknek ugyan az legyen a hátlapja
//  N - a játszott lapok száma - párosnak kell lennie
//  N/2 lapot kell kiválasztani random, majd kettőt létrehozni a kiválasztottakból
//  Lapra kattintás esetén fordítsa meg a kártyát
//  Ha kettő megfordításra kerül akkor Ellenőrzés
//    Ha a kettő ugyan az akkor felfordítva hagyni és tovább menni
//    Ha a kettő nem ugyan az akkor 1 másodpercet várni és visszafordítani őket
//  Visszafordítás és várás idejéig nem lehet másra kattintani

function CardGame() {
  const N = 12;
  const cardfronts = [
    CARD_HEARTS_1,
    CARD_HEARTS_2,
    CARD_HEARTS_3,
    CARD_HEARTS_4,
    CARD_HEARTS_5,
    CARD_HEARTS_6,
    CARD_HEARTS_7,
    CARD_HEARTS_8,
    CARD_HEARTS_9,
    CARD_HEARTS_10,
    CARD_HEARTS_11,
    CARD_HEARTS_12,
    CARD_HEARTS_13,
    CARD_CLUBS_1,
    CARD_CLUBS_2,
    CARD_CLUBS_3,
    CARD_CLUBS_4,
    CARD_CLUBS_5,
    CARD_CLUBS_6,
    CARD_CLUBS_7,
    CARD_CLUBS_8,
    CARD_CLUBS_9,
    CARD_CLUBS_10,
    CARD_CLUBS_11,
    CARD_CLUBS_12,
    CARD_CLUBS_13,
    CARD_DIAMONDS_1,
    CARD_DIAMONDS_2,
    CARD_DIAMONDS_3,
    CARD_DIAMONDS_4,
    CARD_DIAMONDS_5,
    CARD_DIAMONDS_6,
    CARD_DIAMONDS_7,
    CARD_DIAMONDS_8,
    CARD_DIAMONDS_9,
    CARD_DIAMONDS_10,
    CARD_DIAMONDS_11,
    CARD_DIAMONDS_12,
    CARD_DIAMONDS_13,
    CARD_SPADES_1,
    CARD_SPADES_2,
    CARD_SPADES_3,
    CARD_SPADES_4,
    CARD_SPADES_5,
    CARD_SPADES_6,
    CARD_SPADES_7,
    CARD_SPADES_8,
    CARD_SPADES_9,
    CARD_SPADES_10,
    CARD_SPADES_11,
    CARD_SPADES_12,
    CARD_SPADES_13,
  ];
  const cardBacks = [CARD_BACK_1, CARD_BACK_2, CARD_BACK_3, CARD_BACK_4];
  const { cardBack, toggleCardBack } = useContext(CardBackContext);
  const [cards, setCards] = useState([]);
  const [clickDisabled, setClickDisabled] = useState(false);

  useEffect(() => {
    let newCards = [];
    for (let index = 0; index < N; index += 2) {
      let cardfront = cardfronts[Math.floor(Math.random() * cardfronts.length)];
      newCards.push({ id: index, cardfront: cardfront, flipped: 0, check: 0 });
      newCards.push({
        id: index + 1,
        cardfront: cardfront,
        flipped: 0,
        check: 0,
      });
    }
    toggleCardBack(cardBacks[Math.floor(Math.random() * 4)]);
    shuffleArray(newCards);
    setCards(newCards);
    return () => {
      setCards([]);
    };
  }, []);

  useEffect(() => {
    let flippedCards = cards.filter(
      (card) => card.flipped === 1 && card.check === 1
    );
    if (flippedCards.length === 2) {
      setClickDisabled(true);
      if (flippedCards[0].cardfront !== flippedCards[1].cardfront) {
        setTimeout(() => {
          let newCards = [...cards];
          newCards = newCards.map((card) => {
            if (card.flipped === 1 && card.check === 1) {
              card.flipped = 0;
              card.check = 0;
            }
            return card;
          });
          setCards(newCards);
          setClickDisabled(false);
        }, 1000);
      } else {
        let newCards = [...cards];
        newCards = newCards.map((card) => {
          if (card.flipped === 1 && card.check === 1) {
            card.check = 0;
          }
          return card;
        });
        setClickDisabled(false);
        setCards(newCards);
      }
    }
  }, [cards]);

  useEffect(() => {
    let flippedCards = cards.filter((card) => card.flipped === 1);
    if (flippedCards.length === N) {
      alert("You win!");
    }
  }, [cards]);

  return (
    <div>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            onClick={(id) => {
              if (clickDisabled) {
                return;
              }
              let newCards = [...cards];
              let index = newCards.findIndex((card) => card.id === id);
              newCards[index].flipped = 1;
              newCards[index].check = 1;
              setCards(newCards);
            }}
          />
        );
      })}
    </div>
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Get a random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
  }
  return array;
}

export default CardGame;

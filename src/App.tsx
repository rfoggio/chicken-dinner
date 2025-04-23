// src/App.tsx

import React from 'react';
import type { Card, Suit, Value } from './types/card';
import { CardView } from './components/CardView';

// Enumerate all suits and values
const SUITS: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];
const VALUES: Value[] = [
  'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
];

/** Helper to construct a Card */
function createCard(suit: Suit, value: Value, faceUp = true): Card {
  return { suit, value, faceUp };
}

/**
 * Entry point: displays all 52 playing cards face-up in a grid.
 */
const App: React.FC = () => {
  // Build the full deck
  const allCards: Card[] = SUITS.flatMap(suit =>
    VALUES.map(value => createCard(suit, value, true))
  );

  return (
    <div className="p-4 overflow-auto">
      <div
        className="
          grid 
          grid-cols-[repeat(13,auto)] 
          gap-2 
          justify-start
        "
      >
        {allCards.map(card => (
          <CardView
            key={`${card.suit}-${card.value}`}
            card={card}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

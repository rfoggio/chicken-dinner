// src/utils/cardTypes.ts

/** The four suits in a standard deck, as text strings */
export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';

/** The thirteen ranks in a standard deck */
export type Value =
  | 'A'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K';

/**
 * A playing card, which can be face-up or face-down.
 * Used throughout the game engine, UI, and state.
 */
export interface Card {
  suit: Suit;
  value: Value;
  /** Whether the card is currently shown face-up */
  faceUp: boolean;
}

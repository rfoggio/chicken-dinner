// src/components/CardView.tsx

import type { FC } from 'react';
import type { Card, Suit } from '../types/card';

export interface CardViewProps {
  card: Card;
  /** Optional additional classes for styling (Tailwind CSS). */
  className?: string;
}

/**
 * Visual representation of a playing card.
 */
export const CardView: FC<CardViewProps> = ({ card, className = '' }) => {
  // Suits as text strings, so we compare against those
  const isRed = card.suit === 'hearts' || card.suit === 'diamonds';

  const suitSymbols: Record<Suit, string> = {
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
    spades: '♠',
  };
  const suitSymbol = suitSymbols[card.suit];

  // Inline styles for card container
  const containerStyle: React.CSSProperties = {
    width: '80px',
    height: '128px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    padding: '4px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    backgroundColor: card.faceUp ? '#fff' : '#444',
    color: card.faceUp
      ? isRed
        ? '#e3342f'
        : '#111'
      : undefined,
  };
  // Styles for top and bottom rows
  const cornerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    lineHeight: 1,
  };
  // Styles for center pip
  const pipStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    lineHeight: 1,
  };
  // Styles for bottom row (rotated)
  const bottomStyle: React.CSSProperties = {
    ...cornerStyle,
    transform: 'rotate(180deg)',
  };
  return (
    <div className={className} style={containerStyle}>
      {card.faceUp ? (
        <>
          {/* Top row */}
          <div style={cornerStyle}>
            <span>{card.value}</span>
            <span>{suitSymbol}</span>
          </div>
          {/* Center pip */}
          <div style={pipStyle}>{suitSymbol}</div>
          {/* Bottom row */}
          <div style={bottomStyle}>
            <span>{card.value}</span>
            <span>{suitSymbol}</span>
          </div>
        </>
      ) : (
        // Face-down card back
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: '#fff',
          }}
        >
          🂠
        </div>
      )}
    </div>
  );
};

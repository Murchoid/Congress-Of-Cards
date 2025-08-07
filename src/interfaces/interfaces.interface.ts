import { CardSuit, CardValue } from 'src/game-state/entities/game-state.entity';

export interface Player {
  socketId: string;
  username: string;
}

export interface liveGameRoom {
  roomId: string;
  hostId: string;
  players: Player[];
}

export interface Card {
  id: string;
  suit: CardSuit;
  value: CardValue;
  isSpecial?: boolean;
}

export interface PlayerHand {
  playerId: string;
  cards: Card[];
  cardsCount: number;
}

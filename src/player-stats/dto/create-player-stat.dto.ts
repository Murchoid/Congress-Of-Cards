import { IsNumber, IsString } from 'class-validator';

export class CreatePlayerStatDto {
  @IsString()
  userId: string;

  @IsNumber()
  gamesPlayed: number;

  @IsNumber()
  gamesWon: number;

  @IsNumber()
  gamesLost: number;

  @IsNumber()
  totalScore: number;

  @IsNumber()
  averageScore: number;

  @IsNumber()
  bestScore: number;

  @IsNumber()
  totalPlayTime: number; // in seconds

  @IsNumber()
  cardsPlayed: number;

  @IsNumber()
  specialCardsPlayed: number;

  @IsNumber()
  attacksLaunched: number;

  @IsNumber()
  attacksReceived: number;

  @IsNumber()
  winStreak: number;

  @IsNumber()
  bestWinStreak: number;
}

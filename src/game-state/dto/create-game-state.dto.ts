import { IsString } from 'class-validator';
import { Card, PlayerHand } from 'src/interfaces/interfaces.interface';

export class CreateGameStateDto {
  @IsString()
  roomId: string;

  @IsString()
  currentPlayerId: string;

  @IsString({ each: true })
  playerOrder: string[];

  playerHands: PlayerHand[];

  discardPile: Card[];

  drawPile: Card[];

  gameSettings?: Record<string, any>;
}

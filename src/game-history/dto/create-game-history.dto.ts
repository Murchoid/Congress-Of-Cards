import { IsEnum, IsOptional, IsString, IsNumber, IsBoolean, IsObject } from 'class-validator';
import { MoveType } from '../entities/game-history.entity';

export class CreateGameHistoryDto {
  @IsString()
  roomId: string;

  @IsString()
  playerId: string;

  @IsEnum(MoveType)
  moveType: MoveType;

  @IsOptional()
  @IsObject()
  moveData?: Record<string, any>;

  @IsNumber()
  turnNumber: number;

  @IsOptional()
  @IsString()
  winnerId?: string;

  @IsBoolean()
  isGameFinished: boolean;
}

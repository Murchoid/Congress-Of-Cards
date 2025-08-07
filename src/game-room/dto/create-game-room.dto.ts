import {
  IsString,
  IsOptional,
  IsEnum,
  IsBoolean,
  IsNumber,
  IsObject,
  Min,
  Max,
} from 'class-validator';
import { GameRoomStatus } from '../entities/game-room.entity';

export class CreateGameRoomDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  hostId: string;

  @IsNumber()
  @Min(2)
  @Max(8)
  maxPlayers: number;

  @IsNumber()
  @Min(1)
  minPlayers: number;

  @IsEnum(GameRoomStatus)
  status: GameRoomStatus;

  @IsObject()
  gameSettings: Record<string, any>;

  @IsOptional()
  @IsString()
  password?: string;

  @IsBoolean()
  isPrivate: boolean;
}

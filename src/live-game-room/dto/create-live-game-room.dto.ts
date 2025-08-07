import { IsString } from 'class-validator';

export class CreateLiveGameRoomDto {
  @IsString()
  roomId: string;

  @IsString()
  hostId: string;
}

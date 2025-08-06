import { PartialType } from '@nestjs/mapped-types';
import { CreateLiveGameRoomDto } from './create-live-game-room.dto';

export class UpdateLiveGameRoomDto extends PartialType(CreateLiveGameRoomDto) {}

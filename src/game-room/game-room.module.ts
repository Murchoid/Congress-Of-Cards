import { Module } from '@nestjs/common';
import { GameRoomService } from './game-room.service';
import { GameRoomController } from './game-room.controller';

@Module({
  controllers: [GameRoomController],
  providers: [GameRoomService],
})
export class GameRoomModule {}

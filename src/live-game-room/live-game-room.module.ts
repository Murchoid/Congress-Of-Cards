import { Module } from '@nestjs/common';
import { LiveGameRoomService } from './live-game-room.service';
import { LiveGameRoomController } from './live-game-room.controller';

@Module({
  controllers: [LiveGameRoomController],
  providers: [LiveGameRoomService],
})
export class LiveGameRoomModule {}

import { Module } from '@nestjs/common';
import { liveGameRoomService } from './live-game-room.service';
import { LiveGameRoomController } from './live-game-room.controller';

@Module({
  controllers: [LiveGameRoomController],
  providers: [liveGameRoomService],
})
export class LiveGameRoomModule {}

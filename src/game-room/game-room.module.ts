import { Module } from '@nestjs/common';
import { GameRoomService } from './game-room.service';
import { GameRoomController } from './game-room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameRoom } from './entities/game-room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameRoom])],
  controllers: [GameRoomController],
  providers: [GameRoomService],
})
export class GameRoomModule {}

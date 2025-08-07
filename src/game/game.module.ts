/*
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameHistory } from 'src/game-history/entities/game-history.entity';
import { GameRoom } from 'src/game-room/entities/game-room.entity';
import { GameState } from 'src/game-state/entities/game-state.entity';
import { GameGateway } from './game.gateway';
import { GameService } from './game.service';
import { GameRoomController } from 'src/game-room/game-room.controller';
import { GameRoomModule } from 'src/game-room/game-room.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([GameState, GameRoom, GameHistory]),
    GameRoomModule,
  ],
  providers: [GameService, GameGateway],
  controllers: [GameRoomController],
  exports: [GameService],
})
export class GameModule {}
*/
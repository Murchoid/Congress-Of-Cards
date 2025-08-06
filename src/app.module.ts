import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GameRoomModule } from './game-room/game-room.module';
import { UserModule } from './user/user.module';
import { GameHistoryModule } from './game-history/game-history.module';
import { GameStateModule } from './game-state/game-state.module';
import { PlayerStatsModule } from './player-stats/player-stats.module';
import { LiveGameRoomModule } from './live-game-room/live-game-room.module';

@Module({
  imports: [GameRoomModule, UserModule, GameHistoryModule, GameStateModule, PlayerStatsModule, LiveGameRoomModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GameRoomModule } from './game-room/game-room.module';
import { UserModule } from './user/user.module';
import { GameHistoryModule } from './game-history/game-history.module';
import { GameStateModule } from './game-state/game-state.module';
import { PlayerStatsModule } from './player-stats/player-stats.module';
import { LiveGameRoomModule } from './live-game-room/live-game-room.module';
import { AuthsModule } from './auths/auths.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    GameRoomModule,
    UserModule,
    GameHistoryModule,
    GameStateModule,
    PlayerStatsModule,
    LiveGameRoomModule,
    AuthsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

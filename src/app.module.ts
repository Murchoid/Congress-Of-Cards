import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GameRoomModule } from './game-room/game-room.module';
import { UserModule } from './user/user.module';
import { GameHistoryModule } from './game-history/game-history.module';
import { GameStateModule } from './game-state/game-state.module';
import { PlayerStatsModule } from './player-stats/player-stats.module';
import { LiveGameRoomModule } from './live-game-room/live-game-room.module';
import { AuthsModule } from './auths/auths.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './auths/guards';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { CaslModule } from './casl/casl.module';

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => [
        {
          ttl: configService.getOrThrow<number>('T_TTL'),
          limit: configService.getOrThrow<number>('T_LIMIT'),
        },
      ],
    }),
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
    CaslModule,
  ],
  controllers: [],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
     {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    }
  ],
})
export class AppModule {}

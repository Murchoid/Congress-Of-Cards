import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GameRoomModule } from './game-room/game-room.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [GameRoomModule, UserModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

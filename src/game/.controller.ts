/*import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get(':roomId/state')
  async getGameState(@Param('roomId') roomId: string) {
    return await this.gameService.getGameState(roomId);
  }

  @Post(':roomId/start')
  async startGame(@Param('roomId') roomId: string, @Request() req) {
    return await this.gameService.startGame(roomId);
  }

  @Post(':gameStateId/play-card')
  async playCard(
    @Param('gameStateId') gameStateId: string,
    @Body() body: { cardId: string },
    @Request() req,
  ) {
    return await this.gameService.playCard(
      gameStateId,
      req.user.userId,
      body.cardId,
    );
  }

  @Post(':gameStateId/draw-card')
  async drawCard(@Param('gameStateId') gameStateId: string, @Request() req) {
    return await this.gameService.drawCard(gameStateId, req.user.userId);
  }
}
*/
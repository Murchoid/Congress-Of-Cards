import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { GameHistoryService } from './game-history.service';
import { CreateGameHistoryDto } from './dto/create-game-history.dto';

@Controller('game-history')
export class GameHistoryController {
  constructor(private readonly gameHistoryService: GameHistoryService) {}

  @Post()
  create(@Body() dto: CreateGameHistoryDto) {
    return this.gameHistoryService.create(dto);
  }

  @Get('room/:roomId')
  findByRoom(@Param('roomId') roomId: string) {
    return this.gameHistoryService.findByRoom(roomId);
  }

  @Get('room/:roomId/latest')
  findLatestByRoom(@Param('roomId') roomId: string) {
    return this.gameHistoryService.findLatestByRoom(roomId);
  }
}

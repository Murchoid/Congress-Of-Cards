import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GameStateService } from './game-state.service';
import { CreateGameStateDto } from './dto/create-game-state.dto';
import { UpdateGameStateDto } from './dto/update-game-state.dto';

@Controller('game-state')
export class GameStateController {
  constructor(private readonly gameStateService: GameStateService) {}

  @Post()
  create(@Body() createGameStateDto: CreateGameStateDto) {
    return this.gameStateService.create(createGameStateDto);
  }

  @Get(':roomId')
  getState(@Param('roomId') roomId: string) {
    return this.gameStateService.getState(roomId);
  }

  @Patch(':roomId')
  update(
    @Param('roomId') roomId: string,
    @Body() updateGameStateDto: UpdateGameStateDto,
  ) {
    return this.gameStateService.updateState(roomId, (state) => {
      Object.assign(state, updateGameStateDto);
    });
  }

  @Delete(':roomId')
  remove(@Param('roomId') roomId: string) {
    return this.gameStateService.persistState(roomId);
  }
}

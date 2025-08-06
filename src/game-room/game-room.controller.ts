import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { GameRoomService } from './game-room.service';
import { CreateGameRoomDto } from './dto/create-game-room.dto';
import { UpdateGameRoomDto } from './dto/update-game-room.dto';

@Controller('game-rooms')
export class GameRoomController {
  constructor(private readonly gameRoomService: GameRoomService) {}

  @Post()
  create(@Body() dto: CreateGameRoomDto) {
    return this.gameRoomService.create(dto);
  }

  @Get()
  findAll() {
    return this.gameRoomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameRoomService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateGameRoomDto) {
    return this.gameRoomService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameRoomService.remove(id);
  }
}

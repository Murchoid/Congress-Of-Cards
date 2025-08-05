import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameRoomService } from './game-room.service';
import { CreateGameRoomDto } from './dto/create-game-room.dto';
import { UpdateGameRoomDto } from './dto/update-game-room.dto';


@Controller('rooms')
@UseGuards(JwtAuthGuard)
export class GameRoomController {
  constructor(private gameRoomService: GameRoomService) {}

  @Post()
  async createRoom(@Body() createRoomDto: CreateRoomDto, @Request() req) {
    return await this.gameRoomService.create(req.user.userId, createRoomDto);
  }

  @Get()
  async findAll(@Request() req) {
    return await this.gameRoomService.findAll(req.user.userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.gameRoomService.findOne(id);
  }

  @Post(':id/join')
  async joinRoom(
    @Param('id') id: string,
    @Body() joinRoomDto: JoinRoomDto,
    @Request() req,
  ) {
    return await this.gameRoomService.joinRoom(id, req.user.userId, joinRoomDto);
  }

  @Post(':id/leave')
  async leaveRoom(@Param('id') id: string, @Request() req) {
    return await this.gameRoomService.leaveRoom(id, req.user.userId);
  }

  @Get(':id/players')
  async getRoomPlayers(@Param('id') id: string) {
    return await this.gameRoomService.getRoomPlayers(id);
  }

  @Delete(':id')
  async deleteRoom(@Param('id') id: string, @Request() req) {
    return await this.gameRoomService.deleteRoom(id, req.user.userId);
  }
}

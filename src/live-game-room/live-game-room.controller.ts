import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { liveGameRoomService } from './live-game-room.service';
import { CreateLiveGameRoomDto } from './dto/create-live-game-room.dto';
import { UpdateLiveGameRoomDto } from './dto/update-live-game-room.dto';
import { Player } from 'src/interfaces/interfaces.interface';

@Controller('live-game-room')
export class LiveGameRoomController {
  constructor(private readonly liveGameRoomService: liveGameRoomService) {}

  @Post()
  create(@Body() createLiveGameRoomDto: CreateLiveGameRoomDto) {
    return this.liveGameRoomService.createRoom(createLiveGameRoomDto);
  }

  @Post(':id/player')
  addPlayer(@Param('id') id: string, @Body() player: Player) {
    return this.liveGameRoomService.addPlayerToRoom(id, player);
  }

  @Get()
  findAll() {
    return this.liveGameRoomService.getAllRooms();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.liveGameRoomService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLiveGameRoomDto: UpdateLiveGameRoomDto,
  ) {
    return this.liveGameRoomService.updateRoom(id, updateLiveGameRoomDto);
  }

  @Delete(':id/player/:socketId')
  removePlayer(@Param('id') id: string, @Param('socketId') socketId: string) {
    return this.liveGameRoomService.removePlayerFromRoom(id, socketId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.liveGameRoomService.deleteRoom(id);
  }
}

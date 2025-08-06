import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LiveGameRoomService } from './live-game-room.service';
import { CreateLiveGameRoomDto } from './dto/create-live-game-room.dto';
import { UpdateLiveGameRoomDto } from './dto/update-live-game-room.dto';

@Controller('live-game-room')
export class LiveGameRoomController {
  constructor(private readonly liveGameRoomService: LiveGameRoomService) {}

  @Post()
  create(@Body() createLiveGameRoomDto: CreateLiveGameRoomDto) {
    return this.liveGameRoomService.create(createLiveGameRoomDto);
  }

  @Get()
  findAll() {
    return this.liveGameRoomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.liveGameRoomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLiveGameRoomDto: UpdateLiveGameRoomDto) {
    return this.liveGameRoomService.update(+id, updateLiveGameRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.liveGameRoomService.remove(+id);
  }
}

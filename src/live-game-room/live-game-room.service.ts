import { Injectable } from '@nestjs/common';
import { CreateLiveGameRoomDto } from './dto/create-live-game-room.dto';
import { UpdateLiveGameRoomDto } from './dto/update-live-game-room.dto';
import { liveGameRoom, Player } from 'src/interfaces/interfaces.interface';

@Injectable()
export class liveGameRoomService {
  private liveGameRooms: liveGameRoom[] = [];

  createRoom(createLiveGameRoomDto: CreateLiveGameRoomDto): liveGameRoom {
    const newRoom: liveGameRoom = {
      roomId: createLiveGameRoomDto.roomId,
      hostId: createLiveGameRoomDto.hostId,
      players: [],
    };
    this.liveGameRooms.push(newRoom);
    return newRoom;
  }

  updateRoom(roomId: string, updateLiveGameRoomDto: UpdateLiveGameRoomDto): liveGameRoom | undefined {
    const room = this.getRoom(roomId);
    if (room) {
      room.hostId = updateLiveGameRoomDto.hostId || room.hostId;
      return room;
    }
    return undefined;
  }

  getRoom(roomId: string): liveGameRoom | undefined {
    return this.liveGameRooms.find(room => room.roomId === roomId);
  }

  findOne(roomId: string): liveGameRoom | undefined {
    return this.getRoom(roomId);
  }

  addPlayerToRoom(roomId: string, player: Player): liveGameRoom | undefined {
    const room = this.getRoom(roomId);
    if (room) {
      room.players.push(player);
      return room;
    }
    return undefined;
  }

  removePlayerFromRoom(roomId: string, socketId: string): liveGameRoom | undefined {
    const room = this.getRoom(roomId);
    if (room) {
      room.players = room.players.filter(p => p.socketId !== socketId);
      return room;
    }
    return undefined;
  }

  deleteRoom(roomId: string): void {
    this.liveGameRooms = this.liveGameRooms.filter(room => room.roomId !== roomId);
  }

  getAllRooms(): liveGameRoom[] {
    return this.liveGameRooms;
  }
}

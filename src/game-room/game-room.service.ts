import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameRoom } from './entities/game-room.entity';
import { CreateGameRoomDto } from './dto/create-game-room.dto';
import { UpdateGameRoomDto } from './dto/update-game-room.dto';

@Injectable()
export class GameRoomService {
  constructor(
    @InjectRepository(GameRoom)
    private readonly gameRoomRepo: Repository<GameRoom>,
  ) {}

  async create(createGameRoomDto: CreateGameRoomDto): Promise<GameRoom> {
    const room = this.gameRoomRepo.create(createGameRoomDto);
    return this.gameRoomRepo.save(room);
  }

  async findAll(): Promise<GameRoom[]> {
    return this.gameRoomRepo.find({ relations: ['host', 'gameHistory'] });
  }

  async findOne(id: string): Promise<GameRoom | null> {
    return this.gameRoomRepo.findOne({ where: { id }, relations: ['host', 'gameHistory'] });
  }

  async update(id: string, updateGameRoomDto: UpdateGameRoomDto): Promise<GameRoom | null> {
    await this.gameRoomRepo.update(id, updateGameRoomDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.gameRoomRepo.delete(id);
  }
}

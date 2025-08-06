import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameHistory } from './entities/game-history.entity';
import { CreateGameHistoryDto } from './dto/create-game-history.dto';

@Injectable()
export class GameHistoryService {
  constructor(
    @InjectRepository(GameHistory)
    private readonly historyRepo: Repository<GameHistory>,
  ) {}

  async create(createGameHistoryDto: CreateGameHistoryDto): Promise<GameHistory> {
    const gameHistory = this.historyRepo.create(createGameHistoryDto);
    return this.historyRepo.save(gameHistory);
  }

  async findByRoom(roomId: string): Promise<GameHistory[]> {
    return this.historyRepo.find({
      where: { roomId },
      order: { turnNumber: 'ASC', createdAt: 'ASC' },
      relations: ['player'],
    });
  }

  async findLatestByRoom(roomId: string): Promise<GameHistory | null> {
    return this.historyRepo.findOne({
      where: { roomId },
      order: { createdAt: 'DESC' },
    });
  }
}

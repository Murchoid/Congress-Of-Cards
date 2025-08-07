import { Injectable } from '@nestjs/common';
import { CreatePlayerStatDto } from './dto/create-player-stat.dto';
import { UpdatePlayerStatDto } from './dto/update-player-stat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerStats } from './entities/player-stat.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class PlayerStatsService {
  constructor(
    @InjectRepository(PlayerStats)
    private readonly playerStatsRepository: Repository<PlayerStats>,
  ) {}
  create(createPlayerStatDto: CreatePlayerStatDto) {
    const playerStat = this.playerStatsRepository.create(createPlayerStatDto);
    return this.playerStatsRepository.save(playerStat);
  }

  findAll() {
    return this.playerStatsRepository.find();
  }

  findOne(id: string) {
    return this.playerStatsRepository.findOne({ where: { id } });
  }

  update(id: string, updatePlayerStatDto: UpdatePlayerStatDto) {
    return this.playerStatsRepository.update(id, updatePlayerStatDto);
  }

  remove(id: string) {
    return this.playerStatsRepository.delete(id);
  }
}

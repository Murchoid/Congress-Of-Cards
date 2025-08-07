import { Injectable } from '@nestjs/common';
import { CreateGameStateDto } from './dto/create-game-state.dto';
import { UpdateGameStateDto } from './dto/update-game-state.dto';
import { GameState } from './entities/game-state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GameStateService {
  private gameStates = new Map<string, GameState>();

  constructor(
    @InjectRepository(GameState)
    private readonly gameStateRepo: Repository<GameState>,
  ) {}

  async create(createGameStateDto: CreateGameStateDto) {
    const gameState = this.gameStateRepo.create(createGameStateDto);
    const saved = await this.gameStateRepo.save(gameState);
    this.gameStates.set(saved.roomId, saved);
    return saved;
  }

  getState(roomId: string): GameState | undefined {
    return this.gameStates.get(roomId);
  }

  updateState(
    roomId: string,
    updater: (state: GameState) => void,
  ): GameState | undefined {
    const state = this.gameStates.get(roomId);
    if (!state) return;
    updater(state);
    return state;
  }

  persistState(roomId: string): Promise<GameState | undefined> {
    const state = this.gameStates.get(roomId);
    if (!state) throw new Error(`No game state found for room ${roomId}`);
    return this.gameStateRepo.save(state);
  }
}

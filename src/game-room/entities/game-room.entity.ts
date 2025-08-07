import { GameHistory } from 'src/game-history/entities/game-history.entity';
import { GameState } from 'src/game-state/entities/game-state.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

export enum GameRoomStatus {
  WAITING = 'waiting',
  IN_PROGRESS = 'in_progress',
  FINISHED = 'finished',
  CANCELLED = 'cancelled',
}

@Entity('game_rooms')
export class GameRoom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  hostId: string;

  @ManyToOne(() => User, (user) => user.hostedRooms)
  @JoinColumn({ name: 'hostId' })
  host: User;

  @Column({ default: 8 })
  maxPlayers: number;

  @Column({ default: 2 })
  minPlayers: number;

  @Column({
    type: 'enum',
    enum: GameRoomStatus,
    default: GameRoomStatus.WAITING,
  })
  status: GameRoomStatus;

  // Room-level settings like round time, game mode, etc.
  @Column({ type: 'jsonb', default: {} })
  gameSettings: Record<string, any>;

  @Column({ nullable: true })
  password?: string;

  @Column({ default: false })
  isPrivate: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => GameHistory, (history) => history.room)
  gameHistory: GameHistory[];

  @OneToMany(() => GameState, (gameState) => gameState.room)
  gameStates: GameState[];
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import  * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}
  async create(createUserDto: CreateUserDto) {
    const {password} = createUserDto;

    const salt =  await bcrypt.genSalt(10);
    const hashedPass =  await bcrypt.hash(password, salt);

    const user = await this.userRepo.save({
      ...createUserDto,
      password: hashedPass
    });

    return user;
  }

  async findAll() {
    const allUsers = await this.userRepo.find();
    return allUsers;
  }

  async findOne(id: string) {
    const user = await this.userRepo.findOneBy({id})
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userRepo.update(id, updateUserDto);
    return updatedUser;
  }

  async remove(id: string) {
    const deletedUser = await this.userRepo.delete(id);
    return `This action removes a #${id} user`;
  }

  getUserStats(id: string) {
    return `This action return stats for a #${id} user`
  }
  
  getLeaderboard() {
    return `This action returns the leaderboard for users`
  }
}

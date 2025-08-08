import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from 'src/auths/decorators/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}
  
  @Public()
  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get('profile/:id')
  async getProfile(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Get('stats/:id')
  async getStats(@Param('id') id: string) {
    return await this.usersService.getUserStats(id);
  }

  @Get('leaderboard')
  async getLeaderboard() {
    return await this.usersService.getLeaderboard();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Patch('profile/:id')
  async updateProfile(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.update(id, updateUserDto);
  }

}

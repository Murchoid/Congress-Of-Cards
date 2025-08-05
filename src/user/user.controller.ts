import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req) {
    return await this.usersService.findOne(req.user.userId);
  }

  @Patch('profile')
  @UseGuards(JwtAuthGuard)
  async updateProfile(@Body() updateUserDto: UpdateUserDto, @Request() req) {
    return await this.usersService.update(req.user.userId, updateUserDto);
  }

  @Get('stats')
  @UseGuards(JwtAuthGuard)
  async getStats(@Request() req) {
    return await this.usersService.getUserStats(req.user.userId);
  }

  @Get('leaderboard')
  async getLeaderboard() {
    return await this.usersService.getLeaderboard();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }
}
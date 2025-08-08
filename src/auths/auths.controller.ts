import { Body, Controller, Param, Post, Query, Req, UnauthorizedException } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { CreateAuthDto } from './dto/createAuth.dto';
import { RequestWithUser } from 'src/common/types/request.interface';
import { Public } from './decorators/public.decorator';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}

  @Public()
  @Post('signin')
  async singIn(@Body() user: CreateAuthDto) {
    return await this.authsService.signIn(user);
  }

  @Post('/signout/:id')
  signOut(@Param('id') id: string) {
    return this.authsService.signOut(id);
  }

  @Post('/refresh-token')
  refreshtoken(@Query() id: string, @Req() req: RequestWithUser) {
    const user = req.user;
    if (user.sub != id) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.authsService.refreshTokens(id, user.refreshToken);
  }
}

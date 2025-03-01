import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { responseHandler } from 'src/utils/response.handler';
import { IResponseMessage } from 'src/utils/response.message';
import { AuthGuard, RoleGuard } from 'src/middlewares';
import { UsersInterceptor } from './users.interceptor';

@UseInterceptors(UsersInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const result: IResponseMessage =
      await this.usersService.create(createUserDto);
    responseHandler(result, res);
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Get()
  @UseInterceptors(UseInterceptors)
  async findAll(
    @Query() query: { page: number; limit: number },
    @Res() res: Response,
  ) {
    const page = query.page || 1;
    const limit = query.limit || 10;
    const result: IResponseMessage = await this.usersService.findAll(
      page,
      limit,
    );
    responseHandler(result, res);
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const result: IResponseMessage = await this.usersService.findOne(id);
    responseHandler(result, res);
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res: Response,
  ) {
    const result: IResponseMessage = await this.usersService.update(
      id,
      updateUserDto,
    );
    responseHandler(result, res);
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const result: IResponseMessage = await this.usersService.remove(id);
    responseHandler(result, res);
  }
}

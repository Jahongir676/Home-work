import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    UploadedFile,
    UseInterceptors,
    NotFoundException,
  } from '@nestjs/common';
  import { UsersService } from './user.service';
  import { FileInterceptor } from '@nestjs/platform-express';
  
  @Controller('users')
  export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Post()
    async createUser(@Body() createUserDto: { email: string; password: string }) {
      return this.usersService.create(createUserDto);
    }
  
    @Get(':email')
    async findUserByEmail(@Param('email') email: string) {
      const user = await this.usersService.findByEmail(email);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    }
  
    @Put(':email')
    async updateUser(
      @Param('email') email: string,
      @Body() updateUserDto: { email?: string; password?: string },
    ) {
      const user = await this.usersService.findByEmail(email);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user.update(updateUserDto);
    }
  
    @Delete(':email')
    async deleteUser(@Param('email') email: string) {
      const user = await this.usersService.findByEmail(email);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      await user.destroy();
      return { message: 'User deleted successfully' };
    }
  }
  
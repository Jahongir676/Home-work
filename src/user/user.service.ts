import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './dto/user.create.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  create(dto: { email: string; password: string }) {
    return this.userModel.create(dto);
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ where: { email } });
  }
}

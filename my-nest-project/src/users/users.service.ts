import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserRole } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  private findSingleUser(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  create(createUserDto: CreateUserDto) {
    const newUser: User = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return {
      user: newUser,
    };
  }

  findAll(role: UserRole) {
    if (role) {
      const userWithRole = this.users.filter((user) => user.role === role);
      return {
        users: userWithRole,
      };
    }
    return {
      users: this.users,
    };
  }

  findOne(id: number) {
    const user = this.findSingleUser(id);
    return {
      user,
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUserDto,
        };
      }
      return user;
    });
  }

  remove(id: number) {
    const removedUser = this.findSingleUser(id);
    this.users = this.users.filter((user) => user.id !== id);
    return {
      user: removedUser,
    };
  }
}

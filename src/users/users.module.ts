import { Module } from '@nestjs/common';
import { UsersController } from './../users/controllers/users.controller';
import { UsersService } from './services/users.service';
import { CustomerController } from './../users/controllers/customers.controller';
import { CustomersService } from './services/customers.service';

@Module({
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}

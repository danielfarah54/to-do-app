// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { UserService } from './shared/user.service';
// import { UserDTO } from './shared/user.dto';

// @Controller('users')
// export class UsersController {
//   constructor(private userService: UserService) {}

//   @Get()
//   async getAll(): Promise<UserDTO[]> {
//     return this.userService.getAll();
//   }

//   @Get(':id')
//   async getById(@Param('id') id: number): Promise<UserDTO> {
//     return this.userService.getById(id);
//   }

//   @Post()
//   async create(@Body() user: UserDTO): Promise<UserDTO> {
//     return this.userService.create(user);
//   }

//   @Put(':id')
//   async update(
//     @Param('id') id: number,
//     @Body() user: UserDTO,
//   ): Promise<UserDTO> {
//     return this.userService.update(id, user);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: number) {
//     return this.userService.delete(id);
//   }
// }

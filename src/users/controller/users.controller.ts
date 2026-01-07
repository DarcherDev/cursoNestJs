import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('/users')
export class UsersController {
    
    constructor(private usersService: UsersService){}

    @Get('')
    getAllUsers(){
        return this.usersService.getUsers();
    }

    @Post('')
    postUsers(){
        return this.usersService.createUser('daniel');
    }

    @Put('')
    updateUsers(){
        return 'actualiando usuarios'
    }

    @Delete('')
    deletetUsers(){
        return 'eliminando usuarios'
    }
    
    @Patch('/:id')
    updateUsersStatus(@Param('id') id: string, @Body() body: { name: string }){
        return this.usersService.updateUsersNames(parseInt(id), body.name);
    }
}

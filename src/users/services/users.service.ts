import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id: 1,
            name: 'daniel'
        },
        {
            id: 2,
            name: 'camilo'
        },
        {
            id: 3,
            name: 'salome'
        }
    ]

    getUsers() {
        return this.users;
    }

    createUser(name: string){
        return 'usuario actualizado:' + name;
    }

    updateUsersNames(id: number, name: string){
        let updatedUser: { id: number, name: string } | null= null;
        this.users.forEach(user => {
            if (user.id === id) {
                user.name = name;
                updatedUser = user;
            }
        });
        return updatedUser;
    }
}

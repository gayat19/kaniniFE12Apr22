import { User } from "../models/user";

export class UserService{
    users:User[];
    constructor(){
        this.users =[
            new User("Ramu","ramu","Ramu R","user"),
            new User("Somu","somu","Somu SR","admin")
        ];
    }
    getUsers(){
        return this.users;
    }
    addUser(user:User){
        for (let index = 0; index < this.users.length; index++) {
            if(this.users[index].username==user.username){
                return false;
            }
        }
        this.users.push(user);
        return true;
    }
    login(user:User){
        for (let index = 0; index < this.users.length; index++) {
            if(this.users[index].username==user.username && this.users[index].password ==user.password ){
                return this.users[index];
            }
        }
        return null;
    }
}
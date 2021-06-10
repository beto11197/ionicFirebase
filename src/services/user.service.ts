import {Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService{

    constructor(public afDB: AngularFireDatabase){
    }

    public getUsers(){
        console.log(this.afDB);
        return this.afDB.list('usuario/').valueChanges(); 
    }

    public saveUser(user){
        let key = this.afDB.list('/usuario/').push(user).key;
        user.id = key;
        this.afDB.database.ref('usuario/'+user.id).set(user);
    }

    public updateUser(user){
        this.afDB.database.ref('usuario/'+user.id).set(user);
    }

    public getUser(id){
        return this.afDB.object('usuario/'+id).valueChanges();
    }

    public removeUser(id){
        this.afDB.database.ref('usuario/'+id).remove();
    }

}
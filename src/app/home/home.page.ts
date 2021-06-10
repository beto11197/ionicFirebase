import { Component } from '@angular/core';
import {UsersService} from '../../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  idSelected:any; 
  show:boolean; 
  users = []; 
  user = {id:0, nombre:null, apellido:null, edad:null}; 

  constructor(public userService:UsersService) {
    this.show = false; 
    this.idSelected = 0; 
    userService.getUsers()
      .subscribe(users=>{
        this.users = users;
      });
  }

  saveUser(){
    if(this.idSelected != 0){
      this.userService.updateUser(this.user);
    }else{
      this.userService.saveUser(this.user);
    }
    this.clear();
  }


  selectUser(id){ 
    this.show = true;
    this.idSelected = id;

    let receiveUser:any; 

    this.userService.getUser(id)
    .subscribe(user=>{
      receiveUser = user;
      this.user = receiveUser;
    });
  }

  removeUserID(idsele){
    this.userService.removeUser(idsele);
    this.clear();
  }

  removeSelectedUser(){
    this.userService.removeUser(this.idSelected);
    this.clear();
  }


  clear(){
    this.show = false;
    this.idSelected = 0;
    this.user = {id:0, nombre:null, apellido:null, edad:null}; 
  }

  showform(){
    console.log(this.user," - nombre")
    if (this.idSelected!=0) {
      this.idSelected = 0;
      this.user = {id:0, nombre:null, apellido:null, edad:null}; 
    }else{
      this.idSelected = 0;
      this.user = {id:0, nombre:null, apellido:null, edad:null}; 
      this.show = !this.show;
    }
  }

}

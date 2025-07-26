import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/users.interace';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

   userArr : Array<Iuser>=[]
  
    constructor(
      private _userService: UsersService
    ) { }
  
    ngOnInit(): void {
     this._userService.feathAllUser()
     .subscribe({
      next:(data)=>{
        this.userArr=data
      },
      error:err=>{
        console.log(err)
      }
     })
    }
  

}

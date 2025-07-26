import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Iuser } from '../models/users.interace';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  userArr:Array<Iuser> = [
  { userName: 'jhon',
     userId: '123',
      userRole: 'Admin'
     },

  { userName: 'alice',
     userId: '124', 
     userRole: 'Editor'
     },

  { userName: 'bob',
     userId: '125',
      userRole: 'Viewer'
     },

  { userName: 'carol',
     userId: '126',
      userRole: 'Admin'
     },

  { userName: 'dave',
     userId: '127', 
     userRole: 'Editor' 
    },

  { userName: 'eve',
     userId: '128', 
     userRole: 'Viewer' 
    },

  { userName: 'frank',
     userId: '129', 
     userRole: 'Admin'
     },

  { userName: 'grace',
     userId: '130', 
     userRole: 'Editor'
     },

  { userName: 'heidi',
     userId: '131',
      userRole: 'Viewer'
     },

  { userName: 'ivan',
     userId: '132',
      userRole: 'Admin'
     }

];

  constructor() { }
feathAllUser():Observable<Iuser[]>{
  return  of(this.userArr)
}
}

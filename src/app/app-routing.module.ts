import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FairsDashboardComponent } from "./shared/components/fairs-dashboard/fairs-dashboard.component";
import { HomeComponent } from "./shared/components/home/home.component";
import { ProductsDashbordComponent } from "./shared/components/products-dashbord/products-dashbord.component";
import { UsersComponent } from "./shared/components/users/users.component";



 const routes : Routes=[
    {path: 'home',
     component : HomeComponent // http://localhost:4200/home || vercer-b17-routing.com/home

    },
    {
        path :'users',
        component : UsersComponent
    },
    {
        path : 'product',
        component : ProductsDashbordComponent
    },
    {
        path : 'fairs',
        component : FairsDashboardComponent
    }
 ]

   @NgModule({
    imports : [
         RouterModule.forRoot(routes)
    ],
    exports : [] 
    
   })
  export class AppRoutingModule{

  }
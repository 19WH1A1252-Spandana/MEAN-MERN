import { NgModule } from '@angular/core';
import {AuthGuard} from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { HrhomeComponent } from './hrhome/hrhome.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { ShowempComponent } from './showemp/showemp.component'; 
const routes: Routes = [{path:'',component: LoginComponent},
{path:'login',component: LoginComponent},

{path:'product',canActivate:[AuthGuard],component: ProductComponent},

{path:'hrhome', 
children:[{path:'',component:HrhomeComponent},
{path:'register',canActivate : [AuthGuard],component: RegisterComponent},
{path:'showemp',canActivate : [AuthGuard],component:  ShowempComponent},
]},

{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

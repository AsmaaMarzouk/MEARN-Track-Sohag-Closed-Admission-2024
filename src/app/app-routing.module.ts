import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { UserTemplateFormComponent } from './Components/user/user-template-form/user-template-form.component';
import { UserReactiveFormComponent } from './Components/user/user-reactive-form/user-reactive-form.component';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';
import { userGuard } from './Guards/user.guard';
// basics of routes
// first match wins
const routes: Routes = [
  // {path:'',component:MainComponent},// default path
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, // default path
  { path: 'Home', component: MainComponent, title: 'Home page' },
  {
    path: 'Products',
    component: ProductsListComponent,
    title: 'Products Page',
    canActivate: [userGuard],
  },
  {
    path: 'ProductsParent',
    component: ProductsParentComponent,
    title: 'Products Parent',
  },
  {
    path: 'prdDetails/:pId',
    component: ProductDetailsComponent,
    title: 'Products Details',
  },
  {
    path: 'AboutUs',
    component: AboutusComponent,
    title: 'About Us page',
    canActivate: [userGuard],
  },
  {
    path: 'userTemplate',
    component: UserTemplateFormComponent,
    title: 'User Template page',
  },
  {
    path: 'userReactive',
    component: UserReactiveFormComponent,
    title: 'User Reactive page',
  },
  { path: 'Login', component: UserAuthComponent, title: 'User Login page' },
  { path: 'Logout', component: UserAuthComponent, title: 'User Logout page' },
  {
    path: 'Order',
    loadChildren: () =>
      import('src/app/Components/orders/orders.module').then(
        (m) => m.OrdersModule
      ),
  },
  { path: '**', component: NotFoundPageComponent, title: 'Not Found Page' }, //wild card path => not found page
];

// Second Case
// const routes: Routes = [
//   // {path:'',component:MainComponent},// default path
// {path:'main',component:GroupOfRoutesComponent,children:[
//   {path:'',redirectTo:'/Home',pathMatch:"full"},// default path
//   {path:'Home',component:MainComponent,title:"Home page"},
//   {path:'Products',component:ProductsListComponent,title:"Products Page"},
//   {path:'ProductsParent',component:ProductsParentComponent,title:"Products Parent"},
//   {path:'prdDetails/:pId',component:ProductDetailsComponent,title:"Products Details"},
//   {path:'AboutUs',component:AboutusComponent,title:"About Us page"},
// ]},
//   {path:'**',component:NotFoundPageComponent,title:"Not Found Page"},//wild card path => not found page
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

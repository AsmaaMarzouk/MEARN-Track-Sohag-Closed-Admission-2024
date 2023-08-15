import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-template-form',
  templateUrl: './user-template-form.component.html',
  styleUrls: ['./user-template-form.component.scss'],
})
export class UserTemplateFormComponent {
  constructor(private userService:UserService,private router:Router){}
  // addUser() {
  //   // static data
  //   let user: Iuser = {
  //     id: 9,
  //     firstName: 'Wael',
  //     lastName: 'sayed',
  //     email: 'asd@gmail.com',
  //   };

  //   this.userService.signUpUser(user).subscribe({
  //     next:(user) => {
  //       console.log(user);

  //     },
  //     error:(err)=>{
  //       console.log(err);

  //     }
  //   })
  // }

  user:Iuser = {} as Iuser;
  addUser(){

    this.userService.signUpUser(this.user).subscribe({
      next:(user) =>{
        console.log(user);
        this.router.navigate(['/Products']);
      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
}

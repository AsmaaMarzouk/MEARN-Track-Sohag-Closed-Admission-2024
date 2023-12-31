import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
isUserLogged:boolean;
constructor(private userAuth:UserAuthService){
this.isUserLogged=this.userAuth.isUserLoggedIn;
// console.log(this.isUserLogged);

}
  ngOnInit(): void {

    this.userAuth.getUserStatus().subscribe({
      next:(user) => {
        this.isUserLogged=user;
        console.log(this.isUserLogged);


      },
      error:(error) => {
        console.log(error);

      }

    });

  }
}

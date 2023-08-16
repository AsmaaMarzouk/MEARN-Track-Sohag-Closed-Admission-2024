import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
userLog:boolean=false;
  constructor(private userAuthService: UserAuthService){

  }
  ngOnInit(): void {

    this.userLog=this.userAuthService.isUserLoggedIn;
    // console.log(this.userLog);

  }
  userLogin(){

    this.userAuthService.login("asd@gmail.com","1255");
    this.userLog=this.userAuthService.isUserLoggedIn;


  }
  userLogout(){
    this.userAuthService.logout();
    this.userLog=this.userAuthService.isUserLoggedIn;

  }
}

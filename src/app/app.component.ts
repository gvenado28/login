import { Component } from '@angular/core';
import { subscribeOn, Subscriber } from 'rxjs';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario={
    email: '',
    password: ''
  }

  constructor(private authService:AuthService){

  }
  
  Ingresar(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.login(email, password).then(res => {
      console.log("se resgistro ",res);
    })
  }

  IngresarConGoogle(){
    const {email, password} = this.usuario;
    this.authService.loginWhitGoogle(email, password).then(res => {
      console.log("se resgistro ",res);
    })
  }

  logout() {
    this.authService.logout();
  }
}

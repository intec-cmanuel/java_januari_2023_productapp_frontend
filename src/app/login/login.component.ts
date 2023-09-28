import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "../interfaces/LoginResponse";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: "root"
})
export class LoginComponent {
  public email: string = "";
  public password: string = "";
  public loggedInMessage: string = "";

  constructor(private http: HttpClient) {
  }

  login() {
    const url = "http://localhost:8080/login";
    let response = this.http.post<LoginResponse>(url, {email: this.email, password: this.password})
    response.subscribe({
      next: (resp: LoginResponse) =>  {
        this.loggedInMessage = `Welcome ${resp.email}!`
        localStorage.setItem('token', resp.token);
      },
      error: () => this.loggedInMessage = "Login failed!"
    })

  }
}

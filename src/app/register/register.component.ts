import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

@Injectable({
  providedIn: "root"
})
export class RegisterComponent {
  public email: string = "";
  public password: string = "";
  public result: string = "";

  constructor(private http: HttpClient) {
  }

  register() {
    const url = "http://localhost:8080/register"
    let loggedIn = this.http.post(url, { email: this.email, password: this.password});
    loggedIn.subscribe({
      next: () => this.result = "Registration OK",
      error: () => this.result = "Registration failed"
    });
  }
}

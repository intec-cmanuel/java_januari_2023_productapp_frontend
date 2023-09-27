import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

@Injectable({
  providedIn: "root"
})
export class PostComponent {

  public url: string = "http://localhost:8080/product";
  public name: string = "";
  public price: string = "";

  constructor(private http: HttpClient) {
  }

  sendPostRequest() {
    const product = {name: this.name, price: this.price}
    this.http.post(this.url, product).subscribe();

  }
}

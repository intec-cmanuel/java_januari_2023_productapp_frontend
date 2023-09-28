import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../interfaces/Product";

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})

@Injectable({
  providedIn: "root"
})
export class GetComponent {
  public products: Product[] = [];

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    const url= "http://localhost:8080/product";

    const token = localStorage.getItem("token");

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })

    this.http.get<Product[]>(url, { headers }).subscribe({
      next: (products: Product[]) => this.products = products,
      error: err => console.log(err)
    });

  }
}

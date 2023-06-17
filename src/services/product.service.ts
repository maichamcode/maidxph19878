import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { IProduct } from 'src/interface';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProduct():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`http://localhost:3000/products`)
  }
  getProductById(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)
  }
  removeProduct(id:number):Observable<IProduct>{
    return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`)
  }
  addProduct(product:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>(`http://localhost:3000/products`,product)
  }
  editProduct(product:IProduct):Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`,product)
  }
}

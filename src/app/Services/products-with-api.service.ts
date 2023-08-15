import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {
// inject
  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<Iproduct[]>{
  //  return this.httpClient.get<Iproduct[]>('http://localhost:3000/products');
   return this.httpClient.get<Iproduct[]>(`${environment.BaseApiURL}/products`);
  }
  getPrdByID(prdID:number):Observable<Iproduct>{
    // return this.httpClient.get<Iproduct>('http://localhost:3000/products'+'/'+prdID);
    return this.httpClient.get<Iproduct>(`${environment.BaseApiURL}/products/${prdID}`);
  }

  searchByMaterial(mat:string):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.BaseApiURL}/products?Material=${mat}`)

  }

}

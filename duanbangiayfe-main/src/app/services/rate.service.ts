// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Rate } from '../common/Rate';

// @Injectable({
//   providedIn: 'root'
// })
// export class RateService {

//   url = "http://localhost:8080/api/rates";

//   constructor(private httpClient: HttpClient) { }

//   getAll() {
//     return this.httpClient.get(this.url);
//   }

//   getByProductdetail(id:string) {
//     return this.httpClient.get(this.url+'/productdetail/'+id);
//   }

//   getByOrderDetail(id: number) {
//     return this.httpClient.get(this.url+"/"+id);
//   }


//   post(rate: Rate) {
//     return this.httpClient.post(this.url, rate);
//   }

  
//   put(rate: Rate) {
//     return this.httpClient.post(this.url, rate);
//   }
// }

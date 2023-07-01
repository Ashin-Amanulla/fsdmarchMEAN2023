import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  constructor(private http:HttpClient) { }

  addItem(data:any){
    return this.http.post(`http://localhost:5689/api/addItem`, data)

  }

  getCards(){
    return this.http.get(`http://localhost:5689/api/getItems`)

  }

  getOneItem(id:any){
    return this.http.get(`http://localhost:5689/api/getOneItem/${id}`)

  }


  editItem(updatedData:any,id:any){
    return this.http.put(`http://localhost:5689/api/editItem/${id}`,updatedData)

  }

}

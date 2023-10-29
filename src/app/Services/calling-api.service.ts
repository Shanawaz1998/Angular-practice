import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CallingApiService {

  constructor(private data: HttpClient) { 

  } 
  user(){
    return this.data.get('https://jsonplaceholder.typicode.com/users');
  }

  saveUser(value: any){
    return this.data.post('https://jsonplaceholder.typicode.com/albums', value)
  }
}

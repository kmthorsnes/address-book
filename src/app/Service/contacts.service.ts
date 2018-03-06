import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {
  private apiUrl = 'https://ca-address-book.herokuapp.com/api'; 
  
  constructor(private http: Http) {}
  
  all(){
    return this.http.get(`${this.apiUrl}/contacts`)
              .map((response: Response) => response.json());
  }

  show(id: number){

  }

  create(contact: any){

  }
}

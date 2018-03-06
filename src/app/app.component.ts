import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiUrl = 'https://ca-address-book.herokuapp.com/api/contacts'; 
  contacts: any[]; 

    constructor(private http: Http) {
   
      this.http.get(this.apiUrl)
               .map((response: Response) => response.json())
               .subscribe(data => {
                  console.log(data); 
                  this.contacts = data.data; 
               }); 
              
    }
}
 

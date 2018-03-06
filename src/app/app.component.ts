import { Component } from '@angular/core';
import { ContactsService } from './Service/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  contacts: any[]; 

    constructor(private contactsService: ContactsService) {
   
      this.contactsService
          .all()
          .subscribe(( {data}) => {
            this.contacts = data; 
               }); 
              
    }
}
 

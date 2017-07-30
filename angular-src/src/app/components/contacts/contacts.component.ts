import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  contact: Object;
  
  constructor(private authService:AuthService, private contactService:ContactService, private router:Router) { }

  ngOnInit() {
    this.contactService.getContact().subscribe(profile => {
      this.contact = profile.contact;
    },
    err => {
      console.log(err);
      return false;
    });
  }

}

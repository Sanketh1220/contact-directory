import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
  }

  getAllContacts() {
    return JSON.parse(localStorage.getItem('Contacts') || "[]");
  }

  setItemToLocalStorage(contacts: any) {
    localStorage.setItem('Contacts', JSON.stringify(contacts))
  }

  addContactToLocalStorage(contact: any) {
    this.addContact(contact);
  }

  addContact(contact: any) {
    let contacts: any = [];
    if(localStorage.getItem('Contacts')) {
      contacts = this.getAllContacts(); 
      contacts = [contact , ...contacts];
    }else {
      contacts = [contact];
    }
    this.setItemToLocalStorage(contacts);
  }

  deleteContact(contact: Contact) {
    let contacts = this.getAllContacts();
    let index = contacts.findIndex((x: { email: String; }) => x.email === contact.email);
    contacts.splice(index, 1);
    this.setItemToLocalStorage(contacts);
  }
}

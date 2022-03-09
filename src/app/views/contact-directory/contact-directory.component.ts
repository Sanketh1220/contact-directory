import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { NgbModal, NgbModalOptions, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-directory',
  templateUrl: './contact-directory.component.html',
  styleUrls: ['./contact-directory.component.scss'],
  providers: [ToastrService]
})
export class ContactDirectoryComponent implements OnInit {

  isDelete = false;
  modalRef: NgbModalRef | undefined;
  search:any;
  contacts: any;
  searchText: any;

  constructor(
    public contactService: ContactService, 
    private toasterService: ToastrService,
    private ngbModal:NgbModal
    ) {}

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contacts =  this.contactService.getAllContacts();
  }

  confirmDelete(contact: Contact){
    console.log("deleting", contact);
    this.contactService.deleteContact(contact);
    this.toasterService.error(`Contact Deleted Successfully.`);
    this.contacts =  this.contactService.getAllContacts();
  }

  editContact(contact: Contact) {
    console.log("editing", contact);
    this.confirmDelete(contact);
    window.scroll(0,0);
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      centered: true,
      size: 'lg',
    };
    this.modalRef =  this.ngbModal.open(ContactFormComponent, ngbModalOptions);
    console.log("editing", contact);
    this.modalRef.componentInstance.editedContact = contact;
    this.modalRef.componentInstance.editThisContact = true;
    this.modalRef.result.then((result) => {
      if(result === 'close'){
        this.contacts =  this.contactService.getAllContacts();
      }
    });
  }

  openModal() {
    window.scroll(0,0);
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      // keyboard : false,
      centered: true,
      size: 'lg',
    };
    this.modalRef =  this.ngbModal.open(ContactFormComponent, ngbModalOptions);
    this.modalRef.componentInstance.editThisContact = false;
    this.modalRef.result.then((result) => {
      if(result === 'close'){
        this.contacts =  this.contactService.getAllContacts();
      }
    })
  }

}

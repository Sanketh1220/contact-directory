import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [ToastrService]
})
export class ContactFormComponent implements OnInit {
  @Input() editThisContact:any;
  @Input() editedContact:any;
  contactForm: FormGroup;
  fName: string = '';
  lName: string = '';
  mName: string = '';
  telNum: any;
  contactEmail: string = '';
  dateAdded = new Date();

  constructor(
    public contactService: ContactService,
    private toasterService: ToastrService,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
      this.contactForm = this.formBuilder.group({
        email : ['', [Validators.required, Validators.email]],
        fname : ['', [Validators.required]],
        mname : ['', []],
        lname : ['', [Validators.required]],
        address : ['', [Validators.required]],
        telnum : ['', [Validators.required, Validators.maxLength(10), Validators.pattern("[0-9']{10}")]]
      });
   
  }

  ngOnInit(): void {
    if(this.editThisContact == true){  
      this.contactForm.patchValue(this.editedContact);
    }
    console.log("editedContact", this.editedContact);
  }

  // createForm() {
  //   this.contactForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     fname: ['', [Validators.required]],
  //     mname: ['', []],
  //     lname: ['', [Validators.required]],
  //     telnum: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("[0-9']{10}")]]
  //   });
  // }

  onSubmit() {
    console.log('clicked', this.contactForm.value);
    if (this.contactForm.valid) {
      this.contactService.addContactToLocalStorage(this.contactForm.value);
      this.toasterService.success(`Contact Added Successfully.`)
      this.activeModal.close('close');
    }
    return false;
  }
}

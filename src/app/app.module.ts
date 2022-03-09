import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToastrModule } from 'ngx-toastr';
import { NgbDateParserFormatter, NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioButton } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { ContactFormComponent } from './views/contact-form/contact-form.component';
import { ContactDirectoryComponent } from './views/contact-directory/contact-directory.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactDirectoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatAutocompleteModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatDatepickerModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatSliderModule, 
    MatToolbarModule,
    NgbModule,
    MatIconModule,
    MatGridListModule,
    Ng2SearchPipeModule,
    // MatCommonModule,
    // MatButtonToggleModule,
    // MatRadioButton,
    // MatSidenavModule,
    // MatListModule,
    // MatCardModule,
    // MatChipsModule,
    // MatProgressSpinnerModule,
    // MatProgressBarModule,
    // MatSnackBarModule,
    // MatTooltipModule,
    // MatMenuModule,
    // MatDialogModule,
    // MatTableModule,
    // MatSortModule,
    // MatPaginatorModule,
    // MatStepperModule,
    ToastrModule.forRoot(
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule
  ],
  exports:[HeaderComponent,FooterComponent,ConfirmationComponent],
  entryComponents: [
    ConfirmationComponent
  ],
})
export class SharedModule { }

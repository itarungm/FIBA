import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibaMainRoutingModule } from './fiba-main-routing.module';
import { FibaMainComponent } from './fiba-main.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxAnimationsModule } from 'ngx-animations';
import { AnimeTitleComponent } from './anime-title/anime-title.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Base64ToFileComponent } from '../base64-to-file/base64-to-file.component';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    FibaMainComponent,
    AnimeTitleComponent,
    Base64ToFileComponent
  ],
  imports: [
    CommonModule,
    FibaMainRoutingModule,
    NgxDropzoneModule,
    NgxAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule
  
  ]
})
export class FibaMainModule { }

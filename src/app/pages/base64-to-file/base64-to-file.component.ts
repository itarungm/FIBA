import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConverterModule } from 'src/app/enums/converter-module.enum';

@Component({
  selector: 'fiba-base64-to-file',
  templateUrl: './base64-to-file.component.html',
  styleUrls: ['./base64-to-file.component.scss']
})
export class Base64ToFileComponent implements OnInit {
  @ViewChild('inputDialogBox') inputDialogBox;
  base64String: string;
  ConverterModule = ConverterModule
  selectedModule: ConverterModule;
  filetype;
  fileName='Fiba';
  headerName: string;
  constructor(private dialog: MatDialog,private toastr: ToastrService,) { }
  ngOnInit(): void {
  }

  takeUserRequestedName(module){
    if(this.base64String?.trim()){
      this.selectedModule=module;
      this.findFileTypeAndHeader()
      this.dialog.open(this.inputDialogBox,{
        width: '250px'
      })
    }else{
  this.toastr.error('Please paste proper strings!');

    }
 
  }

  findFileTypeAndHeader(){
    if(this.selectedModule===ConverterModule.Base64ToJPG){
      this.filetype='jpg'
      this.headerName="data:image/jpg;base64,"
    }else if(this.selectedModule===ConverterModule.Base64ToPNG){
      this.filetype='png'
      this.headerName="data:image/png;base64,"
    }else if(this.selectedModule===ConverterModule.Base64ToPDF){
      this.filetype='pdf'
      this.headerName="data:application/pdf;base64,"
    }else if(this.selectedModule===ConverterModule.Base64ToHTML){
      this.filetype='html'
      this.headerName="data:text/html;base64,"
    }else if(this.selectedModule===ConverterModule.Base64ToTEXT){
      this.filetype='txt'

      this.headerName='data:text/plain;charset=utf-8,'
    }
  }


  saveWithFileName(){
    this.fileName=this.fileName?.trim()?this.fileName:'fiba'
    const element = document.createElement('a');
    element.setAttribute('href', this.headerName+this.base64String.substr(this.base64String.indexOf(',') + 1));
    element.setAttribute('download', this.fileName+'.'+this.filetype);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  this.toastr.success('Downloaded!');

    this.dialog.closeAll();
  }

}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'fiba-fiba-main',
  templateUrl: './fiba-main.component.html',
  styleUrls: ['./fiba-main.component.scss']
})
export class FibaMainComponent implements OnInit {
  @ViewChild('dropBox') dropBox;
  @ViewChild('previewBox') previewBox;

  dropBoxAnimeTimerId;
  maxFileSize="3145728";
  animeTimerOfDropBox=5000;
  showTextBox = false;
  dropBoxAnimationName="jello"
  files: File[] = [];
  base64StringAfterConversion: string;
  cloneBase64StringAfterConversion:string;
  uploadedFileName: string;
  fileType: string;
  fileToBase64=true;
  constructor(private toastr: ToastrService, private dialog: MatDialog) { 
    this.dropBoxAnimeTimerId = setInterval(()=>{
      if(!this.showTextBox){
        this.dropBox.animate();
      }
    },this.animeTimerOfDropBox)
  }

  ngOnInit(): void {}
  
  ngAfterViewInit(){
    this.dropBox.animate();
  }

	onSelect(event) {
    console.log(event);
    this.uploadedFileName = event.addedFiles[0].name?.split('.')[0];
    this.fileType = event.addedFiles[0].type;
		this.files.push(...event.addedFiles);
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.onload = () => {
      this.HandleReaderLoaded(reader.result);
    };
  }

  HandleReaderLoaded(e) {
    this.base64StringAfterConversion=e;
    this.cloneBase64StringAfterConversion = e;
    this.showTextBox=true;
  }

  onRemove(event) {
		this.files.splice(this.files.indexOf(event), 1);
	}

	downloadBase64(){
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,'+this.base64StringAfterConversion.substr(this.base64StringAfterConversion.indexOf(',') + 1));
    element.setAttribute('download', this.uploadedFileName+'.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  this.toastr.success(`${this.uploadedFileName} Downloaded!`);

  }

  copyToClipboard(){
  let textArea = document.querySelector('#base64');
  (textArea as HTMLInputElement).focus();
  (textArea as HTMLInputElement).select();
  document.execCommand("copy");
  this.toastr.success('Copied Successfully');
  }

  previewFile(){
    if(!this.fileType.includes('image')){
      this.toastr.error('Feature is Coming Soon!','Oops! Preview is not Available.');
      return;
    }
    this.dialog.open(this.previewBox, {
      height: '400px',
      width: '600px',
    });
  }

  resetAll(){
    this.showTextBox=false;
    this.files=[];
    this.fileType='';
    this.cloneBase64StringAfterConversion='';
    this.base64StringAfterConversion='';
    this.toastr.success('Reset!');

  }


  onContentSwitch(event){
    this.fileToBase64=!event.target.checked;
  }

  ngOnDestroy(){
    clearInterval(this.dropBoxAnimeTimerId);
  }

}

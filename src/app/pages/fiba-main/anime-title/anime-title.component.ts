import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'fiba-anime-title',
  templateUrl: './anime-title.component.html',
  styleUrls: ['./anime-title.component.scss']
})
export class AnimeTitleComponent implements OnInit {
  @ViewChild('title') title;
  @Input() fileToBase64;
  randomTimerId;
  randomNumber=0;
  entityNames=[
    'JPG',
    'PNG',
    'HTML',
    'PDF',
    'XLSX'
  ];

  constructor() { }

  ngOnInit(): void {
    this.randomTimerId = setInterval(()=>{
      this.randomNumber = Math.floor(Math.random() * 5);
      this.title.animate();
    },2000  )
  }

  ngAfterViewInit(){
    this.title.animate();
  }

  ngOnDestroy(){
    clearInterval(this.randomTimerId);
  }

}

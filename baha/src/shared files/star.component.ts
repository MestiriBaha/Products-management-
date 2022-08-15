import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
@Component({
  selector: 'app-star',
  templateUrl : './star.component.html' ,
  styleUrls: ['./star.component.css']
})
//declaration expected means the structure of component is still
//not completed and needs to declare the class !!

export class StarComponent implements OnChanges{
  cropwidth : number = 75
  @Input() rating : number = 0 ;
  @Output() notification : EventEmitter<string> = new EventEmitter<string>() ;
  //the width of 5 stars will be 75 as defined , however ??
  // How can we handle the changes auatomaticalluy ??
  // that is the function of ngOnchanges !!!
  onClick() {
    this.notification.emit(`the rating is ${this.rating } `) ;
  }
  ngOnChanges(): void {
    this.cropwidth = this.rating * 75/5 ;
  }

}



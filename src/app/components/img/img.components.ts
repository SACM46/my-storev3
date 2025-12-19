import { Component, Input, OnInit,Output,EventEmitter,OnChanges,AfterViewInit,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.components.html',
  styleUrls: ['./img.components.scss'],
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit,OnDestroy {

  @Input() img: string = 'value of img component';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default-image.png';

// BEFORE RENDER
// NOT ASYNC -- ONE TIME
  constructor() {
console.log('constructor','imgValue =>', this.img);
  }

// WHEN INPUT CHANGES (AS MANY TIMES AS IT CHANGES)
  ngOnChanges(): void {
console.log('ngOnChanges','imgValue =>', this.img);
  }
  
// before render
// async -fetch -- one time
  ngOnInit(): void {}

// after render
// handle - children
  ngAfterViewInit(): void {}

// delete component
ngOnDestroy(): void {}

  imgError() {
    this.img = this.imageDefault;
  }
imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}

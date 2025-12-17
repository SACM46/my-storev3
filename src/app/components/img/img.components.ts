import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.components.html',
  styleUrls: ['./img.components.scss'],
})
export class ImgComponent implements OnInit {

  @Input() img: string = 'value of img component';
  @Output() loaded = new EventEmitter<string>();
    imageDefault = './assets/images/default-image.png';

  constructor() {}

  ngOnInit(): void {}

  imgError() {
    this.img = this.imageDefault;
  }
imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}

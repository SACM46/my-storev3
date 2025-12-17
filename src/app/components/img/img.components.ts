import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}

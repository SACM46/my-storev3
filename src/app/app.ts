import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImgComponent } from './components/img/img.components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImgComponent, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  imgParent = '';

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}

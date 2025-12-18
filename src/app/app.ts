import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ImgComponent } from './components/img/img.components';
import { ProductComponent } from './components/product/product';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ImgComponent, ProductComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  imgParent = '';

products: Product[] = [
  {
    id: '1',
    name: 'Automobil de juguete',
    price: 100,
    image: 'https://th.bing.com/th/id/OIG4.mmyKXhgFMX1PBxX_PiFZ?cb=ucfimg2&pid=ImgGn&ucfimg=1',
    description: 'Auto de juguete para niños'
  },
  {
    id: '2',
    name: 'Muñeca de trapo',
    price: 180,
    image: 'https://th.bing.com/th/id/OIG2.UJf5QEIfwcHwIriLG95U?w=270&h=270&c=6&r=0&o=5&cb=ucfimg2&pid=ImgGn&ucfimg=1',
    description: 'Muñeca hecha a mano'
  },
  {
    id: '3',
    name: 'Pelota de futbol',
    price: 120,
    image: 'https://th.bing.com/th/id/OIG2.f6dG4Mve4VcghkuFWrFE?w=270&h=270&c=6&r=0&o=5&cb=ucfimg2&pid=ImgGn&ucfimg=1',
    description: 'Pelota tamaño profesional'
  }
];

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgComponents } from "./components/img/img.components";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImgComponents],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-storev3');
}

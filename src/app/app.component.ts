import { Component, VERSION } from '@angular/core';
import * as chroma from 'chroma-js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {
    let colors = chroma
      .cubehelix()
      .start(30)
      .rotations(-0.49)
      .hue(2)
      .gamma(1.875)
      .lightness([0.7, 0.4])
      .scale()
      .correctLightness()
      .colors(10);
  }
}

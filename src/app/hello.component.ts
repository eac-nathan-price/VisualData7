import { Component, Input } from '@angular/core';
import chroma from 'chroma-js';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  public colors: string[];

  constructor() {
    this.colors = chroma
      .cubehelix()
      .start(30)
      .rotations(-0.49)
      .hue(2)
      .gamma(1.875)
      .lightness([0.7, 0.4])
      .scale() // convert to chroma.scale
      .correctLightness()
      .colors(10);
  }
}

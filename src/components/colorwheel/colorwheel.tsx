import { Component, ComponentInterface, Event, EventEmitter, getAssetPath, h, Host, Prop, Watch } from '@stencil/core';
import { getMousePosition } from '../../global/utils/imgman_lib/utils/get-mouse-position';
import { Rgb } from '../../global/utils/imgman_lib/color/rgb';
import { colorPicker } from '../../global/utils/imgman_lib/color/color-picker';

const imageWidth = 210;

@Component({
  tag: 'evb-colorwheel',
  styleUrl: 'colorwheel.css',
  assetsDir: 'assets',
  shadow: true
})
export class Colorwheel implements ComponentInterface {
  @Prop() active = false;
  @Prop({ mutable: true }) color: Rgb;

  @Event()
  evbPreview!: EventEmitter<Rgb>;

  @Event()
  evbColor!: EventEmitter<Rgb>;

  private image = './assets/color-wheel.png';
  private canvas: HTMLCanvasElement;

  private listener = (event: any) => {
    const position = getMousePosition(event, this.canvas)
    const color = colorPicker(event.target as HTMLCanvasElement, position.x, position.y);
    this.evbPreview.emit(color);
  };

  @Watch('active')
  updateCanvas(newValue: boolean) {
    if (newValue) {
      const img = this.createImage(getAssetPath(this.image), imageWidth, imageWidth);
      img.onload = () => {
        const context = this.canvas.getContext('2d');
        const height = img.naturalHeight || img.offsetHeight || img.height;
        const width = img.naturalWidth || img.offsetWidth || img.width;

        const dx = width > this.canvas.width ? 0 : (this.canvas.width - width) / 2;
        const dy = height > this.canvas.height ? 0 : (this.canvas.height - height) / 2;

        // put the image on the canvas
        context.drawImage(img, 0, 0, width, height, dx, dy, width, height);

        this.canvas.addEventListener('mousemove', this.listener);
      };
    } else {
      this.canvas.removeEventListener('mousemove', this.listener);
    }
  }

  private createImage(src?: string, width?: number, height?: number): HTMLImageElement {
    const img = document.createElement('img');
    if (src) { img.src = src; }
    if (height) { img.height = height; }
    if (width) { img.width = width; }

    return img;
  }

  private toggleActive() {
    this.active = !this.active;
  }

  private pickColor(event: MouseEvent) {
    this.toggleActive();

    const position = getMousePosition(event, this.canvas)
    this.color = colorPicker(event.target as HTMLCanvasElement, position.x, position.y);
    this.evbColor.emit(this.color);
  }

  render() {
    // tslint:disable: max-line-length
    return (
      <Host>
        <svg class='picker' onClick={() => this.toggleActive()} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' enable-background='new 0 0 24 24'>
          <path
            d='M 18.65625 2.03125 C 17.80625 2.03125 16.9625 2.35 16.3125 3 L 13.90625 5.40625 L 13.09375 4.59375 L 11.6875 6 L 12.34375 6.65625 L 5.90625 13.09375 C 5.0913327 13.908667 4.5859473 14.53447 4.28125 15.09375 C 3.9765527 15.65303 3.895572 16.138385 3.84375 16.46875 C 3.791928 16.799115 3.7728281 16.955431 3.625 17.25 C 3.4806425 17.537654 3.1498958 18.009157 2.5 18.6875 C 2.4843757 18.703808 2.4847788 18.702168 2.46875 18.71875 C 2.3058912 18.890648 2.125 19.19569 2.125 19.5625 C 2.125 19.945833 2.3321489 20.238399 2.5 20.40625 L 3.78125 21.71875 C 3.9491011 21.886601 4.2729167 22.0625 4.65625 22.0625 C 5.0395833 22.0625 5.3321489 21.886601 5.5 21.71875 C 6.2082896 21.03407 6.6496205 20.709687 6.9375 20.5625 C 7.2253795 20.415313 7.3642167 20.426725 7.6875 20.375 C 8.0107833 20.32327 8.5026163 20.208031 9.0625 19.90625 C 9.6223837 19.604469 10.254793 19.12524 11.09375 18.3125 L 17.5625 11.875 L 18 12.3125 L 19.40625 10.90625 L 18.59375 10.09375 L 21 7.6875 C 22.3 6.3875 22.3 4.3 21 3 C 20.35 2.35 19.50625 2.03125 18.65625 2.03125 z M 13.75 8.0625 L 16.125 10.4375 L 9.71875 16.875 L 9.6875 16.90625 C 8.9537726 17.611841 8.4394617 17.986753 8.125 18.15625 C 7.8036337 18.329469 7.6767167 18.326725 7.375 18.375 C 7.0732833 18.42328 6.5746205 18.503437 6.03125 18.78125 C 5.6653499 18.968327 5.1758738 19.395198 4.71875 19.78125 L 4.375 19.46875 C 4.7695901 19.000576 5.2174413 18.532479 5.40625 18.15625 C 5.6834219 17.603944 5.764322 17.088385 5.8125 16.78125 C 5.860678 16.474115 5.892197 16.343845 6.0625 16.03125 C 6.2328027 15.718655 6.5774173 15.235083 7.3125 14.5 L 13.75 8.0625 z'
            overflow='visible'
            enable-background='accumulate'
            font-family='Bitstream Vera Sans' />
        </svg>

        {this.active &&
          <canvas class='wheel' onClick={evt => this.pickColor(evt)} height={imageWidth} width={imageWidth} ref={el => this.canvas = el}></canvas>
        }
      </Host>
    );
    // tslint:enable: max-line-length
  }

}

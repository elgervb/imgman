import { Component, h, ComponentInterface } from '@stencil/core';
import { PickedFile } from '@elgervb/stencil-components/dist/types/components/file-picker/pickedfile';
import { clearCanvas } from '../../global/utils/imgman_lib/canvas/clear';
import { brushFactory } from '../../global/utils/imgman_lib/drawing/brushes';
import { BrushType } from '../../global/utils/imgman_lib/drawing/models';
import { enableDrawing } from '../../global/utils/imgman_lib/drawing/draw';
import { toDataUrl } from '../../global/utils/imgman_lib/data-url/to-data-url';
import { MimeType } from '../../global/utils/imgman_lib/mimetype';
import { copyImageOnCanvas } from '../../global/utils/imgman_lib/create/copy-image-on-canvas';
import { createImage } from '../../global/utils/imgman_lib/create/image';
import { toRgb } from '../../global/utils/imgman_lib/color/to-rgb';
import { rgb2Hex } from '../../global/utils/imgman_lib/color/rgb-2-hex';
import { Rgb } from '../../global/utils/imgman_lib/color/rgb';
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome implements ComponentInterface {

  private canvas: HTMLCanvasElement;
  private downloadLink: HTMLAnchorElement;
  private drawingEnabled = true;
  private color = toRgb(0, 0, 0);

  private filePicked(upload: PickedFile) {

    createImage(upload.dataUrl)
      .onload = event => {
        const img = event.target as HTMLImageElement;

        // clear our canvas first..
        clearCanvas(this.canvas);
        copyImageOnCanvas(this.canvas, img);
      };
  }

  componentDidRender() {
    this.enableDrawing();
  }

  private enableDrawing() {
    const brush = brushFactory(BrushType.pen, {
      canvas: this.canvas,
      color: rgb2Hex(this.color),
      lineWidth: 4,
      globalAlpha: 1
    });

    enableDrawing(this.canvas, brush, () => this.drawingEnabled);
  }

  private setColor(color: Rgb) {
    this.color = color;
    this.enableDrawing();
  }

  render() {
    return (
      <div class='app-home'>

        <div class="tmp">

          <evb-button-bar>
            <a href="/" download="imgman.png" onMouseOver={() => this.downloadLink.href = toDataUrl(this.canvas, MimeType.PNG)} ref={el => this.downloadLink = el}>download</a>
            <evb-filepicker accept="image/*" onPick={(event) => this.filePicked(event.detail)}>
              <evb-button>Pick image</evb-button>
            </evb-filepicker>

            <evb-colorwheel onEvbColor={color => this.setColor(color.detail)}></evb-colorwheel>
          </evb-button-bar>
        </div>

        <canvas height={window.innerHeight} width={window.innerWidth} ref={el => this.canvas = el}></canvas>

      </div>
    );
  }
}

import { Component, h, ComponentInterface } from '@stencil/core';
import { PickedFile } from '@elgervb/stencil-components/dist/types/components/file-picker/pickedfile';
import { createImage } from '../../global/utils/imgman_lib/create/image';
import { clearCanvas } from '../../global/utils/imgman_lib/canvas/clear';
import { brushFactory } from '../../global/utils/imgman_lib/drawing/brushes';
import { BrushType } from '../../global/utils/imgman_lib/drawing/models';
import { enableDrawing } from '../../global/utils/imgman_lib/drawing/draw';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome implements ComponentInterface {

  private canvas: HTMLCanvasElement;
  private drawingEnabled = true;

  private filePicked(upload: PickedFile) {

    createImage(upload.dataUrl)
      .onload = event => {
        const img = event.target as HTMLImageElement;
        const context = this.canvas.getContext('2d');
        const height = img.naturalHeight || img.offsetHeight || img.height;
        const width = img.naturalWidth || img.offsetWidth || img.width;

        const dx = width > this.canvas.width ? 0 : (this.canvas.width - width) / 2;
        const dy = height > this.canvas.height ? 0 : (this.canvas.height - height) / 2;

        // clear our canvas first..
        clearCanvas(this.canvas);

        // put the image on the canvas
        context.drawImage(img, 0, 0, width, height, dx, dy, width, height);
      };
  }

  componentDidRender() {
    this.enableDrawing();
  }

  private enableDrawing() {
    const brush = brushFactory(BrushType.pen, {
      canvas: this.canvas,
      color: '#000',
      lineWidth: 4,
      globalAlpha: 1
    });

    enableDrawing(this.canvas, brush, () => this.drawingEnabled);
  }

  render() {
    return (
      <div class='app-home'>

        <div class="tmp">

          <evb-filepicker accept="image/*" onPick={(event) => this.filePicked(event.detail)}>
            <evb-button>Pick image</evb-button>
          </evb-filepicker>
        </div>

        <canvas height={window.innerHeight} width={window.innerWidth} ref={el => this.canvas = el}></canvas>

      </div>
    );
  }
}

import { Component, h } from '@stencil/core';
import { PickedFile } from '@elgervb/stencil-components/dist/types/components/file-picker/pickedfile';
import { createImage } from '../../global/utils/imgman_lib/create/image';
import { clearCanvas } from '../../global/utils/imgman_lib/canvas/clear';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  private canvas: HTMLCanvasElement;

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

  render() {
    return (
      <div class='app-home'>

        <div class="tmp">
          <stencil-route-link url='/profile/stencil'>
            <button>
              Profile page
            </button>
          </stencil-route-link>
          <evb-filepicker accept="image/*" onPick={(event) => this.filePicked(event.detail)}>
            <evb-button>Pick image</evb-button>
          </evb-filepicker>
        </div>

        <canvas height={window.innerHeight} width={window.innerWidth} ref={el => this.canvas = el}></canvas>

      </div>
    );
  }
}

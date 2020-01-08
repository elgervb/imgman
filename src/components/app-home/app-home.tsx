import { Component, h } from '@stencil/core';
import { PickedFile } from '@elgervb/stencil-components/dist/types/components/file-picker/pickedfile';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  private filePicked(upload: PickedFile) {
    console.log('Uploaded', upload.file.name)
  }

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
        <evb-filepicker accept="image/*" onPick={(event) => this.filePicked(event.detail)}>
          <evb-button>Pick image</evb-button>
        </evb-filepicker>
      </div>
    );
  }
}

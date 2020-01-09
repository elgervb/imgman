import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <div class="tmp">
          <header>
            <stencil-route-link url='/'>
              <h1>Imgman</h1>
            </stencil-route-link>

            <stencil-route-link url='/profile/stencil'>
              <evb-button>
                Profile page
              </evb-button>
            </stencil-route-link>
          </header>

          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url='/' component='app-home' exact={true} />
                <stencil-route url='/profile/:name' component='app-profile' />
              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
      </div>
    );
  }
}

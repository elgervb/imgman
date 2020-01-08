import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/'
    }
  ],
  testing: {
    testPathIgnorePatterns: [
      'imgman_lib/.*canvas.*',
      'imgman_lib/.*canvas.*',
    ],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts']
  }
};

export interface BrushContext {
  canvas: HTMLCanvasElement;
  lineWidth: number;
  color: string;
  globalAlpha: number;
  // tslint:disable-next-line no-any
  data?: any;
}

export enum BrushType {
  pen = 'pen',
  marker = 'marker',
  circular = 'circular',
  spray = 'spray',
  multipleLines = 'multipleLines'
}

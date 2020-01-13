import { BrushContext } from '../models';
import { Point } from '../../utils/point';

export interface Brush {

  down(from: Point): void;
  move(to: Point): void;
  setContext(context: BrushContext): void;
  up(position: Point): void;
}

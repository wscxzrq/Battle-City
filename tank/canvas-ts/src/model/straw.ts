import { position } from './../canvas/canvasAbstract';
import config from "../config";
import { image } from '../service/image';
// 模型类
export default class straw {
  constructor(
    protected canvas:CanvasRenderingContext2D,
    protected position:position) {
      this.canvas.drawImage(image.get('straw')!,position.x,position.y,config.model.width,config.model.height)
  }
}
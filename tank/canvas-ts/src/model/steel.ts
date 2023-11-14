import steel from "../canvas/steel";
import config from "../config";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

/**
 * 砖墙模型类
 */
export default class extends modelAbstract implements IModel {
  canvas: ICanvas = steel;
  image(): HTMLImageElement {
    return image.get(this.name as keyof typeof config.images)!
  }
  name: string = 'steel';
  render(): void {
    super.draw()
  }
}
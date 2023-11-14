import water from "../canvas/water";
import config from "../config";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

/**
 * 砖墙模型类
 */
export default class extends modelAbstract implements IModel {
  public canvas: ICanvas = water;
  image(): HTMLImageElement {
    return image.get(this.name as keyof typeof config.images)!;
  }
  name: string = 'water';
  render(): void {
    super.draw()
  }
}
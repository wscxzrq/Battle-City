import straw from "../canvas/straw";
import config from "../config";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

/**
 * 草地模型类
 */
export default class extends modelAbstract implements IModel {
  public canvas: ICanvas = straw;
  image(): HTMLImageElement {
    return image.get(this.name as keyof typeof config.images)!;
  }
  name: string = 'straw';
  render(): void {
    super.draw()
  }
  
}
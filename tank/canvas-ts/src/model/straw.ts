import config from "../config";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

/**
 * 草地模型类
 */
export default class extends modelAbstract implements IModel {
  name: string = 'straw';
  render(): void {
    super.draw(image.get(this.name as keyof typeof config.images)!)
  }
  
}
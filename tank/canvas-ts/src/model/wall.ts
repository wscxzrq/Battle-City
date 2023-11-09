import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

/**
 * 砖墙模型类
 */
export default class extends modelAbstract implements IModel {
  render(): void {
    super.draw(image.get('wall')!)
  }
}
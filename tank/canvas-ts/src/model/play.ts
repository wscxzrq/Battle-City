import play from "../canvas/play";
import config from "../config";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import _ from 'lodash'

/**
 * 砖墙模型类
 */
export default class extends modelAbstract implements IModel {
  public canvas: ICanvas = play;
  image(): HTMLImageElement {
    let direction = this.name + '-' + _.upperFirst(this.direction);
    return image.get(direction as keyof typeof config.images)!
  }
  name: string = 'play';
  render(): void {
    super.draw()
  }
}
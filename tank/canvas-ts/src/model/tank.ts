import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import _ from 'lodash'
/**
 * 坦克模型类
 */
export default class extends modelAbstract implements IModel {
  name: string = 'tank';
  protected direction: directionEnum = directionEnum.bottom
  render(): void {
    this.randomDirection();
    super.draw(this.randomImage()!)
  }

  // 随机产生方向
  randomDirection () {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum;
  }

  // 产生随机图片
  randomImage() {
    let direction = this.name + _.upperFirst(this.direction);
    return image.get(direction as keyof typeof config.images)!
  }
}
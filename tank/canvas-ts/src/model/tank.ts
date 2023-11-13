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
  render(): void {
    this.move();
  }

  // 坦克移动
  protected move () {
    switch(this.direction) {
      case directionEnum.top:
        this.y -= 2;
        break
      case directionEnum.right:
        this.x += 2;
        break
      case directionEnum.bottom:
        this.y += 2;
        break
      case directionEnum.left:
        this.x -= 2;
        break
    }
    super.draw();   
  }


  // 产生随机图片
  image() {
    let direction = this.name + _.upperFirst(this.direction);
    return image.get(direction as keyof typeof config.images)!
  }
}
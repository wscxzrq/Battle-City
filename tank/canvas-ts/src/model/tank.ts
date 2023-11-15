import tank from "../canvas/tank";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import _ from 'lodash'
import util from '../util'
/**
 * 坦克模型类
 */
export default class extends modelAbstract implements IModel {
  public canvas: ICanvas = tank;
  name: string = 'tank';
  render(): void {
    this.move();
    // 增加坦克向下走的概率
    if(_.random(20) == 1) {
      this.direction = directionEnum.bottom;
    }
  }

  // 坦克移动
  protected move () {
    while(true) {
      let { x, y } = this;
      switch(this.direction) {
        case directionEnum.top:
          y--;
          break
        case directionEnum.right:
          x++;
          break
        case directionEnum.bottom:
          y++;
          break
        case directionEnum.left:
          x--;
          break
      }
      if(util.isModelTouch(x,y) || util.isCanvasTouch(x,y)) {
        this.randomDirection();
      }else {
        this.x = x;
        this.y = y;
        break
      }
    }
    super.draw();   
  }

  // 产生随机图片
  image() {
    let direction = this.name + _.upperFirst(this.direction);
    return image.get(direction as keyof typeof config.images)!
  }
}

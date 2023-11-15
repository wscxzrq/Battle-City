import { directionEnum } from './../enum/directionEnum';
import bullet from "../canvas/bullet";
import config from "../config";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import util from "../util"
/**
 * 子弹模型类
 */
export default class extends modelAbstract implements IModel {
  canvas: ICanvas = bullet;
  name: string = 'bullet';
  constructor(public tank:IModel) {
    super(tank.x + config.model.width / 2,tank.y + config.model.height / 2);
    this.direction = tank.direction
  
  }
  image(): HTMLImageElement {
    return image.get(this.name as keyof typeof config.images)!
  }
  render(): void {
    let {x,y} = this;
    switch(this.direction) {
      case directionEnum.top:
        y -= 2;
        break;
      case directionEnum.right:
        x += 2;
        break;
      case directionEnum.bottom:
        y += 2;
        break;
      case directionEnum.left:
        x -= 2;
        break;
    }
    // 碰撞检测
    if(util.isCanvasTouch(x,y,2,2)) {
      // 卸载模型
      this.destroy();
    }else {
      this.x = x;
      this.y = y;
      this.draw();
    }
  }

  /**
   * 重构渲染方法
   */
  protected draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, 2, 2);
  }
}
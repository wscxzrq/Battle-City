import steel from "../canvas/steel";
import tank from "../canvas/tank";
import wall from "../canvas/wall";
import water from "../canvas/water";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import _ from 'lodash'
/**
 * 坦克模型类
 */
export default class extends modelAbstract implements IModel {
  public canvas: ICanvas = tank;
  name: string = 'tank';
  render(): void {
    this.move();
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
      if(this.isTouch(x,y) === true) {
        this.randomDirection();
      }else {
        this.x = x;
        this.y = y;
        break
      }
    }
    super.draw();   
  }

  // 碰撞检测
  protected isTouch(x:number,y:number):boolean {
    if(x === 0 || x + this.width > config.canvas.width || y < 0 || y + this.height > config.canvas.height) {
      return true
    }

    const models = [...water.models,...wall.models,...steel.models];
    return models.some(model => {
      const state = y + this.height <= model.y || x >= model.x + this.width || y >= model.y + this.height  || x + this.width < model.x;
      return !state
    })
    
  }

  // 产生随机图片
  image() {
    let direction = this.name + _.upperFirst(this.direction);
    return image.get(direction as keyof typeof config.images)!
  }
}
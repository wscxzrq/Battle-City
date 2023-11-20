import bullet from "../canvas/bullet";
import play from "../canvas/play";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import util from "../util";
import modelAbstract from "./modelAbstract";
import _ from 'lodash'

/**
 * 砖墙模型类
 */
export default class extends modelAbstract implements IModel {
  public canvas: ICanvas = play;
  image(): HTMLImageElement {
    let direction = this.name + _.upperFirst(this.direction);
    return image.get(direction as keyof typeof config.images)!
  }
  name: string = 'play';
  bindEvent:boolean = false; // 事件是否绑定
  render(): void {
    super.draw(); 
    if(!this.bindEvent) {
      this.bindEvent = true;
      document.addEventListener('keydown',this.changeDirection.bind(this));
      document.addEventListener('keydown',this.move.bind(this));
      document.addEventListener('keydown',(event:KeyboardEvent) => {
        if(event.code === 'Space') bullet.addPlayButtle()
      });
    }
  }

  /**
   * 改变方向
   * @param event 
   */
  changeDirection(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowUp':
        this.direction = directionEnum.top;
        break;
      case 'ArrowDown':
        this.direction = directionEnum.bottom;
        break;
      case 'ArrowLeft':
        this.direction = directionEnum.left;
        break;
      case 'ArrowRight':
        this.direction = directionEnum.right;
        break;
    }
  }

  /**
   * 己方坦克移动
   * @param event 
   */
  move(event: KeyboardEvent) {
    let {x,y} = this;
    switch (event.code) {
      case 'ArrowUp':
        y -= 5;
        break;
      case 'ArrowDown':
        y += 5;
        break;
      case 'ArrowLeft':
        x -= 5;
        break;
      case 'ArrowRight':
        x += 5;
        break;
    }
    if(util.isCanvasTouch(x,y) || util.isModelTouch(x,y)) {
      return
    }else {
      this.x = x;
      this.y = y;
    }
    this.canvas.renderModels();
  }
}
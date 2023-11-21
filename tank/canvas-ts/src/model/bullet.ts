import { directionEnum } from './../enum/directionEnum';
import bullet from "../canvas/bullet";
import config from "../config";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import util from "../util"
import wall from '../canvas/wall';
import steel from '../canvas/steel';
import boss from '../canvas/boss';
import tank from '../canvas/tank';
import play from '../canvas/play';
import audio from '../service/audio';
/**
 * 子弹模型类
 */
export default class extends modelAbstract implements IModel {
  canvas: ICanvas = bullet;
  name: string = 'bullet';
  constructor(public tank:IModel) {
    super(tank.x + config.model.width / 2,tank.y + config.model.height / 2);
    this.direction = tank.direction as unknown as directionEnum
  
  }
  image(): HTMLImageElement {
    return image.get(this.name as keyof typeof config.images)!
  }
  render(): void {
    let {x,y} = this;
    let step = this.tank.name == 'play' ? 10 : 5
    switch(this.direction) {
      case directionEnum.top:
        y -= step;
        break;
      case directionEnum.right:
        x += step;
        break;
      case directionEnum.bottom:
        y += step;
        break;
      case directionEnum.left:
        x -= step;
        break;
    }
    // 碰撞检测
    const touchModel = util.isModelTouch(x,y,2,2,[...wall.models,...steel.models,...boss.models,...tank.models,...play.models]);
    if(util.isCanvasTouch(x,y,2,2)) {
      // 如果碰到画布卸载模型
      this.destroy();
    }else if (touchModel && touchModel.name != this.tank.name) {
      this.destroy();
      if(touchModel.name != 'steel') touchModel.destroy();
      this.blast(touchModel);
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

  /**
   * 爆炸动画
   */
  protected blast(model:IModel) {
    audio.blast();
    Array(...Array(8).keys()).reduce((promise,index) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const img = new Image();
          img.src = `/src/static/images/blasts/blast${index}.gif`
          img.onload = () => {
            this.canvas.ctx.drawImage(img,model.x,model.y,config.model.width,config.model.height);
            resolve(promise)
          }
        },50)
      })
    },Promise.resolve())
  }
}
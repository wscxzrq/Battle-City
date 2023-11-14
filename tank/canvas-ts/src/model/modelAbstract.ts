import config from "../config";
import { directionEnum } from "../enum/directionEnum";

// 模型的抽象类
export default abstract class modelAbstract {
  // 抽象方法，要求子类定义一个抽象方法
  abstract render():void // 渲染函数
  abstract image():HTMLImageElement // 模型图片
  abstract name:string // 模型名称
  protected direction: directionEnum = directionEnum.bottom // 方向
  public width = config.model.width // 模型宽度
  public height = config.model.height // 模型高度
  public abstract canvas:ICanvas // 画布

  constructor(
    public x:number,
    public y:number) {
      this.randomDirection();
  }
  
  /**
   * 渲染方法
   * this.canvas 是一个抽象属性，模型子类中引入对应的 模型画布，模型画布的 interface 中存在
   */
  protected draw() {
    this.canvas.ctx.drawImage(this.image(),this.x,this.y,config.model.width,config.model.height)
  }

  // 随机产生方向
  randomDirection () {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum;
  }
}
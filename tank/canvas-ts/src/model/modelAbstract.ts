import config from "../config";

// 模型的抽象类
export default abstract class modelAbstract {
  // 抽象方法，要求子类定义一个抽象方法
  abstract render():void

  constructor(
    protected canvas:CanvasRenderingContext2D,
    protected x:number,
    protected y:number) {
  }

  // 渲染方法
  protected draw(img:HTMLImageElement) {
    this.canvas.drawImage(img!,this.x,this.y,config.model.width,config.model.height)
  }
}
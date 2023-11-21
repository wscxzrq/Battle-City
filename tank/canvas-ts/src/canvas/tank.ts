import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/tank";
import position from "../service/position";
/**
 * 坦克的画布
 */
export default new (class extends canvasAbstract implements ICanvas {
  intervalId:number = 0
  num(): number {
    return config.tank.num;
  }
  model(): ModelConstructor {
    return model;
  }
  render(): void {
    this.createModels();
    this.renderModels();

    this.intervalId = setInterval(() => this.renderModels(),config.timeout)
  }
  stop(): void {
    clearInterval(this.intervalId);
  }
  /**
   * 渲染模型
   */
  public renderModels() {
    this.ctx.clearRect(0,0,config.canvas.width,config.canvas.height);
    super.renderModels(); 
  }

  /**
   * 创建模型实例
   * @param num 需要渲染的模型个数
   * @param model 需要渲染的模型构造函数
   */
  protected createModels() {
    for(let i = 0; i < this.num(); i++) {
      const pos = position.position();
      const model = this.model();
      const instance = new model(pos.x,0);
      this.models.push(instance);
    }
  }
})('tank')

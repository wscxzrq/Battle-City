import config from "../config";
import position from "../service/position";
// 画布类
export default abstract class canvasAbstract {
  public models:IModel[] = [] // 存放实例数据
  abstract render():void
  abstract num():number
  abstract model():ModelConstructor
  // protected 子类可以调用外部无法调用
  constructor(
    protected el = document.createElement('canvas'),
    protected app = document.querySelector('#app')!,
    public ctx = el.getContext('2d')!,
  ) {
    // 每个子类继承时会自动执行 构造函数
   this.createCanvas();
  }

  /**
   * 绘制画布
   */
  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.app.insertAdjacentElement('afterbegin',this.el);
  }

  /**
   * 创建模型实例
   * @param num 需要渲染的模型个数
   * @param model 需要渲染的模型构造函数
   */
  protected createModels() {
    position.positionCollection(this.num()).forEach(position => {
      const model = this.model()
      const instance = new model(position.x,position.y);
      this.models.push(instance)
    })
  }

  /**
   * 渲染模型
   * 解决重绘画布时模型多次重绘
   */
  protected renderModels() {
    this.models.forEach(model => model.render())
  }
  
}
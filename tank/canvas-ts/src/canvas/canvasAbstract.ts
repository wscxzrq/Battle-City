import config from "../config";
export interface position {
  x:number,
  y:number
}
// 画布类
export default abstract class canvasAbstract {
  protected items = [] // 存放坦克数据
  abstract render():void
  // protected 子类可以调用外部无法调用
  constructor(
    protected el = document.createElement('canvas'),
    protected app = document.querySelector('#app')!,
    protected canvas = el.getContext('2d')!,
  ) {
    // 子类继承时会自动执行 构造函数
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
   * 绘制模型
   */
  protected drawModels(num:number,model:any) {
    this.positionCollection(num).forEach(position => {
      new model(this.canvas,position);
    })
  }

  /**
   * 批量生成 处理生成重叠问题
   */
  protected positionCollection(num:number):position[] {
    const collection: position[] = [];
    for(let i = 0; i < num; i++) {
      while(true) {
        const position = this.position();
        const exists = collection.some(c => c.x === position.x && c.y === position.y);
        if(!exists) {
          collection.push(position);
          break
        }
      }
    }
    return collection
  }
  /** 
   * 返回随机位置
   */
  protected position ():position {
    return {
      x:Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y:Math.floor(Math.random() * (config.canvas.height / config.model.height)) * config.model.height
    }
  }
}
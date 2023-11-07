import './style.css'

class Blackboard {
  constructor(
    public el:HTMLCanvasElement = document.querySelector("#canvas")!,
    private height:number = el.height,
    private width:number = el.width,
    private app = el.getContext('2d')!,
    private btns:HTMLDivElement = document.createElement('div'),
    private bgColor:string = '#000',
    private lineColor = '#fff'
  ) {
    this.initCanvas();
    this.bindEvent();
    this.draw();
    this.short()
  }
  /**
   * 初始画布
   */
  private initCanvas() {
    this.app.fillStyle = this.bgColor;
    this.app.fillRect(0,0,this.width,this.height);
    this.el.insertAdjacentElement('afterend',this.btns);
    this.btns.classList.add('btns');
  }

  /**
   * 绑定事件
   */
  private bindEvent() {
    const callback = this.drawLine.bind(this)
    // 鼠标按下
    this.el.addEventListener('mousedown', () => {
      this.app.beginPath();
      this.app.strokeStyle = this.lineColor
      // 鼠标移动
      this.el.addEventListener('mousemove',callback)
    })
    // 鼠标抬起
    document.addEventListener('mouseup',() => {
      this.el.removeEventListener('mousemove',callback)
    })
  }

  /**
   * 画线
   */
  private drawLine(event:MouseEvent) {
    this.app.lineTo(event.offsetX,event.offsetY);
    this.app.stroke();
  }

  /**
   * 清屏
   */
  public clear() {
    const el:HTMLButtonElement = document.createElement('button');
    el.innerText = '清屏';
    this.btns.insertAdjacentElement('afterbegin',el);

    el.addEventListener('click',() => {
      this.app.fillStyle = this.bgColor;
      this.app.fillRect(0,0,this.el.width,this.el.height);
    })
    return this
  }

  /**
   * 设置背景颜色
   */
  public setBgColor(color:string) {
    this.bgColor = color;
    this.app.fillStyle = color;
    this.app.fillRect(0,0,this.el.width,this.el.height);
    return this
  }

  /**
   * 修改粉笔颜色
   */
  public setLineColor() {
    const colors:string[] = ['#1abc9c','#f1c40f','#9b59b6','#ecf0f1'];
    const container = document.createElement('div');
    container.classList.add('color-container');
    
    colors.forEach(color => {
      const div:HTMLDivElement = document.createElement('div');
      div.style.cssText = `width:20px;height:20px;background:${color}`;
      container.insertAdjacentElement('afterbegin',div);
      div.addEventListener('click',() => {
        this.lineColor = color
      })
    })
    this.btns.insertAdjacentElement('beforeend',container);
  }

  /**
   * 橡皮檫
   */
  public erase() {
    const el:HTMLButtonElement = document.createElement('button');
    el.innerText = '橡皮';
    this.btns.insertAdjacentElement('afterbegin',el);

    el.addEventListener('click',() => {
      this.lineColor = this.bgColor;
      this.app.lineWidth = 10;
    })
    return this
  }

  /**
   * 写字
   */
   public draw() {
    const el:HTMLButtonElement = document.createElement('button');
    el.innerText = '写字';
    this.btns.insertAdjacentElement('afterbegin',el);

    el.addEventListener('click',() => {
      this.lineColor = '#fff';
      this.app.lineWidth = 1;
    })
    return this
  }

  /**
   * 截图
   */
  public short() {
    const el:HTMLButtonElement = document.createElement('button');
    el.innerText = '截图';
    this.btns.insertAdjacentElement('afterbegin',el);
    const img:HTMLImageElement = document.createElement('img');
    el.addEventListener('click',() => {
     img.src = this.el.toDataURL('image/jpeg');
     img.classList.add('img-short');
    })
    this.btns.insertAdjacentElement('afterend',img);
    return this
  }
}

const instance = new Blackboard();

instance.clear().setLineColor()
instance.erase()
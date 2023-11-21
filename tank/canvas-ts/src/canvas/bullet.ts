import canvasAbstract from "./canvasAbstract";
import model from '../model/bullet' 
import tank from "./tank";
import bullet from '../model/bullet'
import play from "./play";
import audio from '../service/audio'
/**
 * 子弹画布
 */
 export default new (class extends canvasAbstract implements ICanvas {
  intervalId:number = 0
  num(): number {
    return 0;
  }
  model(): BulletModelConstructor {
    return model
  }
  render(): void {
    this.intervalId = setInterval(() => {
      this.createButtle();
      this.renderModels();
    },50)
  } 
  stop(): void {
    clearInterval(this.intervalId);
  }

  /**
   * 创建子弹
   */
  createButtle() {
    // 遍历每一个坦克模型
    tank.models.forEach(tank => {
      // 检查子弹模型数组 如果当前坦克不存在于 子弹模型中，那么创建一个坦克模型并且添加到子弹模型中
      const isExists = this.models.some(m => m.tank == tank);
      if(!isExists) {        
        this.models.push(new bullet(tank));
      }
    })
  }

  /**
   * 创建玩家子弹
   */
  addPlayButtle() {
    audio.fire();
    this.models.push(new bullet(play.models[0]));
  }
})('bullet')


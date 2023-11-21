import './style.scss'
import straw from './canvas/straw.ts';
import { promise } from './service/image.ts';
import wall from './canvas/wall.ts';
import water from './canvas/water.ts';
import steel from './canvas/steel.ts';
import tank from './canvas/tank.ts';
import bullet from './canvas/bullet.ts'
import boss from './canvas/boss.ts'
import play from './canvas/play.ts'
import audio from './service/audio.ts';
import config from './config.ts';
// 异步加载图片，图片加载完成后进行画布渲染
const app = document.querySelector<HTMLDivElement>('#app')!
export default {
  isStart: false,
  state:9,
  interval:0,
  bootstrap() {
    app.addEventListener('click',() => {
      this.start();
      audio.start();
      this.interval = setInterval(() => {
        if(tank.models.length == 0) this.state = 1;
        if(play.models.length == 0 || boss.models.length == 0) this.state = 0; 
        if(this.state != 9) {
          this.stop()
        }
      },100)
    });
  },
  stop () {
    clearInterval(this.interval);
    tank.stop();
    bullet.stop();
    this.text();
  },
  text() {
    const el = document.createElement('canvas');
    el.width = config.canvas.width;
    el.height = config.canvas.height;
    const ctx = el.getContext('2d')!;
    ctx.fillStyle = 'red';
    ctx.font = '80px cascadiaMono';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(this.state == 1 ? '赢得胜利' : '游戏结束', config.canvas.width / 2, config.canvas.height / 2);
    app.appendChild(el);
  },
  async start() {
    if(this.isStart) {
      return
    }
    this.isStart = true; 
    await Promise.all(promise);
    app.style.backgroundImage = 'none';
    app.style.cursor = 'none';
    // 渲染草地
    straw.render();
    // 渲染砖墙
    wall.render();
    // 渲染水
    water.render(); 
    // 渲染白色墙体
    steel.render(); 
    // 渲染坦克
    tank.render();
    // 渲染子弹
    bullet.render();
    // 渲染 boos
    boss.render();
    // 渲染玩家
    play.render();
  }
}
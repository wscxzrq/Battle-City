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
// 异步加载图片，图片加载完成后进行画布渲染
async function bootsrap() {
  await Promise.all(promise);
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

void bootsrap()

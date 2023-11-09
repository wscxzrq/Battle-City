import './style.scss'
import straw from './canvas/straw.ts';
import { promise } from './service/image.ts';
import wall from './canvas/wall.ts';
import water from './canvas/water.ts';
import steel from './canvas/steel.ts';
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
 }

void bootsrap()

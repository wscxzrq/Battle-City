import './style.scss'
import straw from './canvas/straw.ts';
import { promise } from './service/image.ts';
// 异步加载图片，图片加载完成后进行画布渲染
async function bootsrap() {
  await Promise.all(promise);
  straw.render();
 }

void bootsrap()

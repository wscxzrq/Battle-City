import config from "../config";
// typeof 获取 config.image 的类型，keyof 使用 typeof 获取到的联合类型进行约束
type mapKey = keyof typeof config.images
/**
 * 图片处理服务
 */
export const image = new Map<mapKey,HTMLImageElement>();
export const promise = Object.entries(config.images).map(([key,value]) => {
  return new Promise((resolve) => {
    const img = document.createElement('img');
    img.src = value;
    img.onload = () => {
      image.set(key as mapKey,img);
      resolve(img);
    }
  })
})
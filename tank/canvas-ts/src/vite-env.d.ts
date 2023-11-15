/// <reference types="vite/client" />
// 模型的类型校验
interface ModelConstructor {
  new(x:number,y:number):IModel
}
/**
 * 子弹模型的类型校验
 */
interface BulletModelConstructor {
  new(tank:IModel):IModel
}
interface IModel {
  render():void,
  x:number,
  y:number,
  width:number,
  height:number,
  image(): HTMLImageElement
  tank?:IModel // 是否发射子弹
  direction:directionEnum, // 坦克的方向
}
/**
 * 画布的类型校验
 */
interface ICanvas {
  num():number
  model():ModelConstructor | BulletModelConstructor
  ctx:CanvasRenderingContext2D
  removeModel(model:IModel):void
}
/// <reference types="vite/client" />
// 模型的类型校验
interface ModelConstructor {
  new(canvas:CanvasRenderingContext2D,x:number,y:number):IModel
}

interface IModel {
  render():void
}

interface ICanvas {
  num():number
  model():ModelConstructor
}
import boss from "./canvas/boss";
import steel from "./canvas/steel";
import wall from "./canvas/wall";
import water from "./canvas/water";
import config from "./config";

export default {
  /**
   * 对模型的碰撞检测
   * @param x 当前元素的 x 坐标
   * @param y 当前元素的 y 坐标
   * @param width 模型的宽度
   * @param height 模型的高度
   * @param models 碰撞检测的模型
   * @returns 碰撞到了
   */
  isModelTouch(x:number,y:number,width=config.model.width,height=config.model.height, models = [...wall.models,...steel.models,...water.models,...boss.models]):IModel | undefined {
    return models.find(model => {
      const state = y + height <= model.y || x >= model.x + model.width || y >= model.y + model.height  || x + width <= model.x;
      return !state
    })
  },

  /**
   * 对画布的碰撞检测
   * @param x 当前元素的 x 坐标
   * @param y 当前元素的 y 坐标
   * @param width 模型的宽度
   * @param height 模型的高度
   * @returns 碰撞到了
   */
  isCanvasTouch(x:number,y:number,width=config.model.width,height=config.model.height):boolean {
    return x < 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height
  }

}
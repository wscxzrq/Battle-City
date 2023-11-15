import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from '../model/steel'
/**
 * 白色的墙的画布
 */
export default new (class extends canvasAbstract implements ICanvas {
  num(): number {
    return config.wall.num;
  }
  model(): ModelConstructor {
    return model;
  }
  render(): void {
    super.createModels();
    super.renderModels();
  }
  
})('steel')

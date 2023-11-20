import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from '../model/play'
/**
 * 水的画布
 */
export default new (class extends canvasAbstract implements ICanvas {
  num(): number {
    return config.water.num;
  }
  model(): ModelConstructor {
    return model;
  }
  render(): void {
    super.createModels();
    super.renderModels();
  }
  
})('play')

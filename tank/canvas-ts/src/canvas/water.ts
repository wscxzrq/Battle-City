import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from '../model/water'
/**
 * 水的画布
 */
class water extends canvasAbstract implements ICanvas {
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
  
}
export default new water()

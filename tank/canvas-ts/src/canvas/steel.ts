import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from '../model/steel'
/**
 * 白色的墙的画布
 */
class steel extends canvasAbstract {
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
export default new steel()

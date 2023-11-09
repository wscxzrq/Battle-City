import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/straw.ts"; // 草地模型

/**
 * 草地画布
 */
class straw extends canvasAbstract {
  num():number {
    return config.straw.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels(); 
    super.renderModels();
  }
  
}

export default new straw()
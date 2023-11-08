import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/straw.ts";


class straw extends canvasAbstract {
  render(): void {
    super.drawModels(config.straw.num,model);
  }
  
}

export default new straw()
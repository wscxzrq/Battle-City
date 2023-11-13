import config from "../config";
type positionType = {
  x:number,
  y:number
} 
/**
 * 位置处理服务
 */
class position {
  /**
   * 保存生成的结果
   */
  collection:positionType[] = []
  /**
   * 批量生成 处理生成重叠问题
   */
  public positionCollection(num:number) {
    const collection: positionType[] = [];
    for(let i = 0; i < num; i++) {
      while(true) {
        const position = this.position();
        const exists = collection.some(c => c.x === position.x && c.y === position.y);
        if(!exists) {
          collection.push(position);
          this.collection.push(position);
          break
        }
      }
    }
    return collection
  }
  /** 
   * 返回随机位置
   */
  public position () {
    return {
      x:Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y:Math.floor(Math.random() * ((config.canvas.height / config.model.height) - 5)) * config.model.height + config.model.height * 2
    }
  }
}

export default new position();
// 音频管理
export default {
  el(id:string) {
    return document.querySelector<HTMLAudioElement>(id)!
  },
  start() {
    this.el('#aStart').play();
  }, // 开始游戏的声音
  fire() {
    this.el('#aFire').play();
  }, // 发射子弹的声音
  blast() {
    this.el('#aBlast').play();
  }, // 爆炸的声音
}
import straw from './static/images/straw/straw.png'
import wall from './static/images/wall/walls.gif'
import water from './static/images/water/water.gif'
import steel from './static/images/wall/steels.gif'
import tankTop from './static/images/tank/top.gif'
import tankRight from './static/images/tank/right.gif'
import tankBottom from './static/images/tank/bottom.gif'
import tankLeft from './static/images/tank/left.gif'
import bullet from './static/images/bullet/bullet.jpg'
import boss from './static/images/boss/boss.png'
import playTop from './static/images/player/top.gif'
import playRight from './static/images/player/right.gif'
import playBottom from './static/images/player/bottom.gif'
import playLeft from './static/images/player/left.gif'

export default {
  timeout:10, // 坦克运行的速度
  canvas:{
    width:900,
    height:600
  }, // 画布配置
  model:{
    width:30,
    height:30
  }, // 模型配置
  straw:{
    num:20
  }, // 草地
  wall:{
    num:80
  }, // 砖墙
  water:{
    num:5
  }, // 水
  steel:{
    num:10
  }, // 白色墙体
  tank:{
    num:5
  }, // 坦克
  images:{
    straw, //草地图片
    wall, // 砖墙图片
    water, // 水图片
    steel, // 白色墙体图片
    tankTop, // 向上坦克图片
    tankRight, // 向右坦克图片
    tankBottom, // 向下坦克图片
    tankLeft, // 向左坦克图片
    bullet, // 子弹图片
    boss, // boos 图片
    playTop, // 玩家向上图片
    playRight, // 玩家向右图片
    playBottom, // 玩家向下图片
    playLeft, // 玩家向左图片
  }
}
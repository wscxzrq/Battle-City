import straw from './static/images/straw/straw.png'
import wall from './static/images/wall/walls.gif'
import water from './static/images/water/water.gif'
import steel from './static/images/wall/steels.gif'
import tankTop from './static/images/tank/top.gif'
import tankRight from './static/images/tank/right.gif'
import tankBottom from './static/images/tank/bottom.gif'
import tankLeft from './static/images/tank/left.gif'



export default {
  timeout:10, // 坦克运行的速度
  canvas:{
    width:900,
    height:500
  }, // 画布配置
  model:{
    width:30,
    height:30
  }, // 模型配置
  straw:{
    num:120
  }, // 草地
  wall:{
    num:80
  }, // 砖墙
  water:{
    num:60
  }, // 砖墙
  steel:{
    num:20
  }, // 白色墙体
  tank:{
    num:20
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
  }
}
import straw from './static/images/straw/straw.png'
import wall from './static/images/wall/walls.gif'
import water from './static/images/water/water.gif'
import steel from './static/images/wall/steels.gif'


export default {
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
  images:{
    straw, //草地图片
    wall, // 砖墙图片
    water, // 水图片
    steel, // 白色墙体图片
    tank:straw
  }
}
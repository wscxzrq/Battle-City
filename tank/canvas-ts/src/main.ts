let canvas:HTMLCanvasElement = document.getElementById('canvas')!

let app =  canvas.getContext('2d')!

app.fillStyle = '#000'
app.fillRect(0,0,300,300)

// for (let i = 0; i < 1000; i++) {
//   app.fillStyle = 'white'
//   app.fillRect(Math.random() * canvas.width,Math.random() * canvas.height,2,2)
// }


for (let i = 0; i < 20; i++) {
  app.beginPath()
  app.fillStyle = ['#1abc9c','#27ae60','#2980b9','#8e44ad','#e67e22','#e74c3c'].sort(() => Math.floor(Math.random() * 3) ? 1 : -1)[0]
  app.arc(Math.random() * canvas.width / 2,Math.random() * canvas.height / 2,5 + Math.random() * 10,0,2 * Math.PI)
  app.fill()
}
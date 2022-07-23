
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let lastX = 0
let lastY = 0
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 10
let drawing = false


canvas.addEventListener('mousedown',(e)=> {
    drawing = true
    lastX = e.offsetX
    lastY = e.offsetY
})
canvas.addEventListener('mouseup',()=> drawing = false)
canvas.addEventListener('mousemove',draw)


function draw(e){
    if(drawing){
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX,e.offsetY)
        ctx.stroke()
        lastX = e.offsetX
        lastY = e.offsetY
    }
}

function clean(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

}

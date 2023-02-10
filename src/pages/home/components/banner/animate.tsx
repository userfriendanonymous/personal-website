const doublePI = Math.PI * 2

interface Star {
    radius: number
    speed: number
    image: HTMLImageElement
}

let canvasSize = {
    x: 0,
    y: 0,
    radius: 0,
}

function capture(size: number, func: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void): HTMLImageElement {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx){return new HTMLImageElement()}
    canvas.width = size
    canvas.height = size
    ctx.translate(size / 2, size / 2)
    func(canvas, ctx)
    const image = new Image()
    image.src = canvas.toDataURL()
    return image
}

function calcX(pos: number){
    return pos * canvasSize.radius / 2
}

function calcY(pos: number){
    return pos * canvasSize.radius / 2
}

function random(start: number, end: number): number {
    return Math.random() * (end - start) + start
}

function randint(start: number, end: number): number {
    return Math.round(random(start, end))
}
const stars: Array<Star> = []

for (let i = 0; i < 100; i++){
    stars.push({
        radius: randint(0, 1) == 0 ? random(0.18, 1) : random(-0.18, -1),
        speed: random(0.3, 1),
        image: capture(50, (canvas, ctx) => {
            const size = randint(3, 7)
            const color = `rgb(${randint(0, 255)}, ${randint(0, 255)}, ${randint(0, 255)})`
            ctx.filter = 'brightness(200%)'
            ctx.fillStyle = color
            ctx.beginPath()
            ctx.arc(0, 0, size, 0, doublePI)
            ctx.shadowColor = color
            ctx.shadowBlur = size * 2
            ctx.fill()
        })
    })
}

let frameId = 0

export default function animate(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D){
    frameId += 1
    canvasSize = {
        x: canvas.width,
        y: canvas.height,
        radius: Math.sqrt(canvas.width ** 2 + canvas.height ** 2)
    }

    ctx.globalAlpha = 0.05
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 1
    const rotateDegree = frameId / 50
    ctx.translate(canvasSize.x / 2, canvasSize.y / 2)
    

    for (let star of stars) {
        const x = Math.cos(rotateDegree * star.speed) * star.radius
        const y = Math.sin(rotateDegree * star.speed) * star.radius
        const w = star.image.naturalWidth
        const h = star.image.naturalHeight
        ctx.translate(-w/2, -h/2)
        ctx.drawImage(star.image, calcX(x), calcY(y))
        ctx.translate(w/2, h/2)
    }

    ctx.translate(-canvasSize.x / 2, -canvasSize.y / 2)
}
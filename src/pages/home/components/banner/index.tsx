import React, { useEffect, useRef } from "react"
import animate from './animate'
import Card from "./card"

export default function Banner(){
    const canvasRef = useRef<HTMLCanvasElement>(null!)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        const clientRect = canvas.getBoundingClientRect()
        canvas.width = clientRect.width
        canvas.height = clientRect.height

        window.addEventListener('resize', () => {
            const clientRect = canvas.getBoundingClientRect()
            canvas.width = clientRect.width
            canvas.height = clientRect.height
        })

        const render = () => {
            window.requestAnimationFrame(render)
            if (!ctx){return}
            animate(canvas, ctx)
        }

        render()
    }, [])

    return (
        <div className='h-[100vh] flex items-center justify-center bg-[#000] relative'>
            <Card/>
            <canvas className='w-full h-[100%] absolute' ref={canvasRef}/>
        </div>

    )
}
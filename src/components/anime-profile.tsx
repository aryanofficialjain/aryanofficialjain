"use client"

import { useEffect, useRef } from "react"

interface AnimeProfileProps {
  className?: string
}

export default function AnimeProfile({ className = "" }: AnimeProfileProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 300
    canvas.height = 300

    // Create a pixel art style anime character
    const drawAnimePixelArt = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background
      ctx.fillStyle = "#1a1a2e"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Face shape
      ctx.fillStyle = "#ffd6d6"
      ctx.beginPath()
      ctx.ellipse(150, 150, 80, 100, 0, 0, Math.PI * 2)
      ctx.fill()

      // Hair
      ctx.fillStyle = "#6a4c93"
      ctx.beginPath()
      ctx.ellipse(150, 120, 90, 100, 0, Math.PI, Math.PI * 2)
      ctx.fill()

      // Bangs
      ctx.beginPath()
      ctx.moveTo(90, 120)
      ctx.bezierCurveTo(90, 150, 120, 140, 120, 170)
      ctx.lineTo(90, 170)
      ctx.closePath()
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(210, 120)
      ctx.bezierCurveTo(210, 150, 180, 140, 180, 170)
      ctx.lineTo(210, 170)
      ctx.closePath()
      ctx.fill()

      // Eyes
      ctx.fillStyle = "#ffffff"
      ctx.beginPath()
      ctx.ellipse(125, 150, 15, 20, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(175, 150, 15, 20, 0, 0, Math.PI * 2)
      ctx.fill()

      // Pupils
      ctx.fillStyle = "#ff2e63"
      ctx.beginPath()
      ctx.ellipse(125, 150, 8, 12, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(175, 150, 8, 12, 0, 0, Math.PI * 2)
      ctx.fill()

      // Shine in eyes
      ctx.fillStyle = "#ffffff"
      ctx.beginPath()
      ctx.ellipse(122, 145, 3, 4, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(172, 145, 3, 4, 0, 0, Math.PI * 2)
      ctx.fill()

      // Mouth
      ctx.fillStyle = "#ff2e63"
      ctx.beginPath()
      ctx.ellipse(150, 190, 15, 8, 0, 0, Math.PI)
      ctx.fill()

      // Add some gaming headphones
      ctx.fillStyle = "#2d2d2d"
      ctx.beginPath()
      ctx.arc(80, 140, 20, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(220, 140, 20, 0, Math.PI * 2)
      ctx.fill()

      // Headphone band
      ctx.strokeStyle = "#2d2d2d"
      ctx.lineWidth = 10
      ctx.beginPath()
      ctx.arc(150, 100, 70, Math.PI * 0.2, Math.PI * 0.8)
      ctx.stroke()

      // Add some pixel effect
      const pixelSize = 5
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let y = 0; y < canvas.height; y += pixelSize) {
        for (let x = 0; x < canvas.width; x += pixelSize) {
          const i = (y * canvas.width + x) * 4
          if (i < imageData.data.length) {
            ctx.fillStyle = `rgba(${imageData.data[i]}, ${imageData.data[i + 1]}, ${imageData.data[i + 2]}, ${imageData.data[i + 3] / 255})`
            ctx.fillRect(x, y, pixelSize, pixelSize)
          }
        }
      }

      // Add a subtle glow effect
      ctx.shadowColor = "#ff2e63"
      ctx.shadowBlur = 15
      ctx.strokeStyle = "#ff2e63"
      ctx.lineWidth = 2
      ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20)
      ctx.shadowBlur = 0
    }

    drawAnimePixelArt()

    // Add a subtle animation
    let frame = 0
    const animate = () => {
      frame++
      if (frame % 60 === 0) {
        // Blink every 60 frames
        ctx.fillStyle = "#ffd6d6"
        ctx.fillRect(110, 140, 30, 20)
        ctx.fillRect(160, 140, 30, 20)

        setTimeout(() => {
          drawAnimePixelArt()
        }, 150)
      }
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full rounded-lg ${className}`} />
}


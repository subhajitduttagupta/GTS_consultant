"use client"

import { useEffect, useRef } from "react"

interface CircuitBackgroundProps {
  className?: string
}

const CircuitBackground = ({ className = "" }: CircuitBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawCircuit()
    }

    // Initial resize
    resizeCanvas()

    // Listen for window resize
    window.addEventListener("resize", resizeCanvas)

    // Draw circuit pattern
    function drawCircuit() {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = "#0284c7" // Blue color matching the theme
      ctx.lineWidth = 1

      const gridSize = 50
      const nodeRadius = 3
      const nodeChance = 0.3
      const lineChance = 0.4

      // Create grid of potential nodes
      const nodes = []
      for (let x = gridSize; x < canvas.width; x += gridSize) {
        for (let y = gridSize; y < canvas.height; y += gridSize) {
          if (Math.random() < nodeChance) {
            nodes.push({ x, y, connections: [] })
          }
        }
      }

      // Connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        // Find potential connections (nearby nodes)
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue

          const target = nodes[j]
          const dx = target.x - node.x
          const dy = target.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only connect to nearby nodes and with some randomness
          if (distance < gridSize * 2 && Math.random() < lineChance) {
            node.connections.push(j)
          }
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        for (const connectionIndex of node.connections) {
          const target = nodes[connectionIndex]

          // Draw line
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)

          // Decide if we want a direct line or one with a right angle
          if (Math.random() > 0.5) {
            // Direct line
            ctx.lineTo(target.x, target.y)
          } else {
            // Right angle line
            if (Math.random() > 0.5) {
              ctx.lineTo(node.x, target.y)
              ctx.lineTo(target.x, target.y)
            } else {
              ctx.lineTo(target.x, node.y)
              ctx.lineTo(target.x, target.y)
            }
          }

          ctx.stroke()
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2)
        ctx.fillStyle = "#0284c7"
        ctx.fill()
      }

      // Add some circuit components (rectangles, circles)
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = 10 + Math.random() * 20

        if (Math.random() > 0.5) {
          // Rectangle
          ctx.strokeRect(x, y, size, size)
        } else {
          // Circle
          ctx.beginPath()
          ctx.arc(x, y, size / 2, 0, Math.PI * 2)
          ctx.stroke()
        }
      }
    }

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className={`${className}`} />
}

export default CircuitBackground

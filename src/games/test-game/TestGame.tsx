import React, { useEffect, useRef, useState } from "react"

export default function TestGame() {
  const [player, setPlayer] = useState({ x: 140, y: 140 })
  const [target, setTarget] = useState({ x: 50, y: 50 })
  const [score, setScore] = useState(0)
  const gameRef = useRef(null)

  const step = 12
  const size = 300 // Viewport dimensions

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent page scrolling when playing
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault()
      }

      setPlayer((prev) => {
        let { x, y } = prev
        if (e.key === "ArrowUp") y -= step
        if (e.key === "ArrowDown") y += step
        if (e.key === "ArrowLeft") x -= step
        if (e.key === "ArrowRight") x += step

        return {
          x: Math.max(0, Math.min(size - 20, x)),
          y: Math.max(0, Math.min(size - 20, y)),
        }
      })
    }

    const node = gameRef.current
    node!.addEventListener("keydown", handleKeyDown)
    return () => node!.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    const dist = Math.hypot(player.x - target.x, player.y - target.y)
    if (dist < 20) {
      setScore((s) => s + 1)
      setTarget({
        x: Math.floor(Math.random() * (size - 20)),
        y: Math.floor(Math.random() * (size - 20)),
      })
    }
  }, [player, target])

  return (
    <div
      ref={gameRef}
      tabIndex="0" // Allows the div to capture keyboard events
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: "#1a1a1a",
        position: "relative",
        outline: "none", // Removes the focus border
        cursor: "crosshair",
        borderRadius: "8px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        overflow: "hidden",
      }}
    >
      {/* Score Overlay */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          color: "#fff",
          fontFamily: "monospace",
          fontSize: "18px",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        SCORE: {score}
      </div>

      {/* Player Square */}
      <div
        style={{
          position: "absolute",
          left: player.x,
          top: player.y,
          width: "20px",
          height: "20px",
          backgroundColor: "#00ffcc",
          boxShadow: "0 0 10px #00ffcc",
          transition: "all 0.05s linear",
        }}
      />

      {/* Target Dot */}
      <div
        style={{
          position: "absolute",
          left: target.x,
          top: target.y,
          width: "12px",
          height: "12px",
          backgroundColor: "#ff0055",
          borderRadius: "50%",
          boxShadow: "0 0 8px #ff0055",
        }}
      />
    </div>
  )
}

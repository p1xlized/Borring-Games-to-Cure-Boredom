import TestGame from "./test-game/TestGame"
import type { ComponentType } from "react"

export type Game = {
  id: string
  name: string
  description: string
  image: string
  component: ComponentType
}

export const games: Array<Game> = [
  {
    id: "ranchers-delight",
    name: "Rancher's Delight",
    description: "Grow crops from stage -10 to 10. Watch out for the drought!",
    image: "/test_game.jpg",
    component: TestGame,
  },
  {
    id: "neon-bit-runner",
    name: "Neon Bit Runner",
    description: "A fast-paced terminal runner set in the phosphor-green grid.",
    image: "/test_game.jpg",
    component: TestGame,
  },
]

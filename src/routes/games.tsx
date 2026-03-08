import { createFileRoute } from "@tanstack/react-router"
import { games } from "../games/games-index"
import type { Game } from "../games/games-index"
import ImageCard from "@/components/ui/image-card"
import { motion } from "framer-motion" // 1. Import motion

export const Route = createFileRoute("/games")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex items-center justify-center p-4">
      {/* 2. Added grid layout for better organization */}
      <div className="border-muted bg-secondary grid min-h-128 min-w-128 grid-cols-1 gap-6 rounded-xl p-6 sm:grid-cols-2 md:grid-cols-3">
        {games.map((game: Game, index: number) => (
          <motion.div
            key={game.id || index}
            // Entrance animation (staggered fade-in)
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            // Interaction animations
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <ImageCard caption={game.name} imageUrl={game.image} />
          </motion.div>
        ))}
      </div>
    </main>
  )
}

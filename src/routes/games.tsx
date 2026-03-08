import { createFileRoute, useNavigate } from "@tanstack/react-router" // 1. Import useNavigate
import { motion } from "framer-motion"
import { games } from "../games/games-index"
import type { Game } from "../games/games-index"
import ImageCard from "@/components/ui/image-card"

export const Route = createFileRoute("/games")({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate() // 2. Initialize the hook

  return (
    <main className="flex items-center justify-center p-4">
      <div className="border-muted bg-secondary grid min-h-128 min-w-lg grid-cols-1 gap-6 rounded-xl p-6 sm:grid-cols-2 md:grid-cols-3">
        {games.map((game: Game, index: number) => (
          <motion.div
            key={game.id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            // 3. Add the onClick handler
            onClick={() => {
              navigate({
                to: "/game/$id",
                params: { id: game.id },
              })
            }}
          >
            <ImageCard caption={game.name} imageUrl={game.image} />
          </motion.div>
        ))}
      </div>
    </main>
  )
}

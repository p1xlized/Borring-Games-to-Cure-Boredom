import { Link, createFileRoute, useParams } from "@tanstack/react-router"
import { games } from "../games/games-index" // Import your games array

export const Route = createFileRoute("/game/$id")({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = useParams({ from: "/game/$id" })

  // 1. Find the game object by ID
  const game = games.find((g) => g.id === id)

  // 2. Extract the component (aliasing to uppercase so React recognizes it)
  const GameComponent = game?.component

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold capitalize">
          {game?.name || id.replace(/-/g, " ")}
        </h1>
        <p className="text-muted-foreground mt-2">
          {game ? "Use Arrow Keys to play." : "This game doesn't exist yet."}
        </p>
      </div>
      <div className="from-primary/20 to-secondary border-muted relative rounded-2xl border bg-gradient-to-tr p-1 shadow-2xl">
        <div className="bg-card flex items-center justify-center overflow-hidden rounded-xl p-4">
          {/* 3. Render the dynamic component if it exists */}
          {GameComponent ? (
            <GameComponent />
          ) : (
            <div className="text-muted-foreground flex h-[300px] w-[300px] items-center justify-center italic">
              Game component not found.
            </div>
          )}
        </div>
      </div>
      <Link
        to="/games"
        className="text-muted-foreground hover:text-primary mt-8 text-sm transition-colors"
      >
        ← Back to Library
      </Link>
    </main>
  )
}

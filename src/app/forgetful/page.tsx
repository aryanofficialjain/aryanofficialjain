import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { Play } from "lucide-react"

export default function GameLandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/game-background.png"
          alt="Forgetful Game Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/assets/forgetful-logo.png"
            alt="Forgetful Game Logo"
            width={400}
            height={120}
            className="w-auto h-24 md:h-32 lg:h-40"
            priority
          />
        </div>

        {/* Game Description */}
        <div className="max-w-2xl mb-12">
          <p className="text-lg md:text-xl text-pink-100 leading-relaxed mb-6">
            Embark on a dreamy adventure through mystical landscapes. Discover forgotten memories in this enchanting
            puzzle platformer.
          </p>
          <p className="text-base text-pink-200">Experience the magic across multiple platforms</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mb-16">
          <a
            href="https://aryanofficialjain.itch.io/forgetful"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-pink-500/80 hover:bg-pink-500 text-white backdrop-blur-sm border border-pink-400/50 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Play Now!
            </Button>
          </a>
        </div>

        {/* Countdown Timer */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-pink-400/20">
          <CountdownTimer />
        </div>


      </div>
    </div>
  )
}

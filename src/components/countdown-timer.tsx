"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Set target date to 2 months from now
    const targetDate = new Date()
    targetDate.setMonth(targetDate.getMonth() + 2)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold text-pink-200 mb-4">Coming to Google Play Store in:</h3>
      <div className="flex justify-center gap-4 text-white">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
          <div className="text-2xl font-bold text-pink-300">{timeLeft.days}</div>
          <div className="text-sm text-pink-200">Days</div>
        </div>
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
          <div className="text-2xl font-bold text-pink-300">{timeLeft.hours}</div>
          <div className="text-sm text-pink-200">Hours</div>
        </div>
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
          <div className="text-2xl font-bold text-pink-300">{timeLeft.minutes}</div>
          <div className="text-sm text-pink-200">Minutes</div>
        </div>
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
          <div className="text-2xl font-bold text-pink-300">{timeLeft.seconds}</div>
          <div className="text-sm text-pink-200">Seconds</div>
        </div>
      </div>
    </div>
  )
}

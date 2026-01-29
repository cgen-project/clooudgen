"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Rocket, ShieldCheck, Zap, Users } from "lucide-react"

export default function Home() {
  const router = useRouter()
  const [seconds, setSeconds] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          router.push("https://cloudgen.bd")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [router])

  return (
    <div className="h-screen overflow-hidden bg-white text-[#4173BE] flex flex-col font-sans">
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center max-w-4xl mx-auto w-full animate-in fade-in zoom-in duration-500">

        {/* Header Section */}
        <div className="space-y-4 mb-4 md:mb-8">
          <div className="mx-auto bg-primary/5 p-4 rounded-full w-fit mb-4 ring-1 ring-primary/20">
            <Rocket className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#4173BE] leading-tight">
            We’ve moved!
          </h1>

          <p className="text-base md:text-lg text-[#4173BE]/80 max-w-xl mx-auto leading-relaxed">
            <span className="font-bold">clooudgen.com</span> has officially changed to <span className="font-bold text-primary">cloudgen.bd</span>
          </p>

          <p className="text-sm md:text-base text-[#4173BE] max-w-lg mx-auto">
            You are being automatically redirected to our new website.
          </p>
        </div>

        {/* Action Card Section */}
        <div className="w-full max-w-sm space-y-6 bg-slate-50/50 p-8 rounded-3xl border border-slate-100 shadow-xl backdrop-blur-sm relative overflow-hidden group">
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 transition-all group-hover:bg-primary/10" />

          <div className="flex flex-col items-center justify-center py-4">
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg ring-4 ring-primary/10">
              <svg className="absolute w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                <circle
                  className="text-slate-100"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-[#4173BE] transition-all duration-1000 ease-linear"
                  strokeWidth="8"
                  strokeDasharray={251.2}
                  strokeDashoffset={251.2 - (251.2 * seconds) / 3}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
              </svg>
              <span className="text-4xl font-black text-[#002952]">{seconds}</span>
            </div>

            <p className="mt-6 text-sm font-medium text-[#4173BE]/70">
              If you are not redirected within a few seconds, please visit:
            </p>
          </div>

          <Button
            size="lg"
            className="w-full h-14 text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-1 rounded-xl"
            onClick={() => router.push("https://cloudgen.bd")}
          >
            cloudgen.bd
            <Rocket className="w-5 h-5 ml-2 animate-bounce" />
          </Button>
        </div>

        {/* Features Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
          <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="bg-amber-100/50 p-2 rounded-xl ring-1 ring-amber-200">
              <Zap className="w-5 h-5 text-amber-600" />
            </div>
            <span className="font-semibold text-sm">Faster performance</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="bg-emerald-100/50 p-2 rounded-xl ring-1 ring-emerald-200">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="font-semibold text-sm">Enhanced security</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="bg-blue-100/50 p-2 rounded-xl ring-1 ring-blue-200">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-semibold text-sm">Same Great Team</span>
          </div>
        </div>

      </main>

      <footer className="py-4 text-center text-slate-400 text-xs font-medium border-t border-slate-100">
        <p>&copy; {new Date().getFullYear()} CloudGen. Thank you for trusting us.</p>
      </footer>
    </div>
  )
}

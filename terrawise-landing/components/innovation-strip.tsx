"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InnovationStrip() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="relative h-[500px] w-full flex items-center">
      {/* Parallax background with new solar panel image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="w-full h-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/images/solar-panels-closeup.jpg')" }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 max-w-content-lg">
        <div className="md:max-w-[540px] text-center md:text-left px-4 md:px-0">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-white leading-tight mb-6">
            Redefining robotics for clean energy.
          </h2>
          <p className="text-xl font-normal text-text-light max-w-[540px] mb-8">
            Our R&D team combines cutting-edge AI with robust hardware to create robots that can navigate the
            challenging terrain of solar farms with ease.
          </p>
          {/* <Button
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal font-semibold rounded-button hover:bg-white/90 transition-colors"
          >
            <Play className="h-5 w-5" />
            See Helios in action
          </Button> */}
        </div>
      </div>

      {/* Video Lightbox */}
      {videoOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              aria-label="Close video"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-white text-lg">Video would play here</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

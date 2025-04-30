"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

const solutions = [
  {
    id: 1,
    title: "Panel Inspection",
    description: "Thermal and visual inspection to detect hotspots, cracks, and soiling issues.",
    image: "/placeholder.svg?height=180&width=320",
    link: "#",
  },
  {
    id: 2,
    title: "Digital Twin",
    description: "Create a digital replica of your solar farm for predictive maintenance and optimization.",
    image: "/placeholder.svg?height=180&width=320",
    link: "#",
  },
  {
    id: 3,
    title: "Autonomous Cleaning",
    description: "Waterless cleaning system that removes dust and debris without scratching panels.",
    image: "/placeholder.svg?height=180&width=320",
    link: "#",
  },
  {
    id: 4,
    title: "Performance Analytics",
    description: "AI-powered analytics to maximize energy yield and extend panel lifespan.",
    image: "/placeholder.svg?height=180&width=320",
    link: "#",
  },
]

export default function SolutionsGrid() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === "left" ? -320 : 320
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container max-w-content-lg">
        {/* Heading */}
        <div className="text-center mx-auto max-w-content-md mb-12">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-charcoal mb-4">Solutions for the Real World</h2>
          <p className="text-lg text-text-secondary">
            Our robotic solutions are designed to address the specific challenges faced by solar farm operators.
          </p>
        </div>

        {/* Card Grid */}
        <div
          ref={scrollRef}
          className={cn(
            "grid gap-6 pb-4",
            isMobile
              ? "grid-flow-col auto-cols-[320px] overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          )}
        >
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={cn(
                "bg-white rounded-card shadow-card overflow-hidden transition-transform duration-150 hover:scale-[1.02]",
                isMobile && "snap-center",
              )}
            >
              <div className="relative h-[180px] w-full">
                <Image src={solution.image || "/placeholder.svg"} alt={solution.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">{solution.title}</h3>
                <p className="text-text-secondary mb-4">{solution.description}</p>
                <Link
                  href={solution.link}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-hover"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile scroll indicators */}
        {isMobile && (
          <div className="flex justify-center gap-2 mt-6">
            {solutions.map((_, index) => (
              <div key={index} className="h-2 w-2 rounded-full bg-gray-300" />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

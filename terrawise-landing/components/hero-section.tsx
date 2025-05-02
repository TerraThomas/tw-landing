import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] max-h-[720px] w-full flex items-center">
      {/* Image Background with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Overlay - using a slightly lighter overlay (30% opacity instead of 40%) to let the image show through more */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Hero background image */}
        <div className="relative w-full h-full">
          <Image
            src="/images/solar-hero-old.png"
            alt="Solar farm with robot at sunset"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 max-w-content-lg">
        <div className="md:max-w-[540px] text-center md:text-left px-4 md:px-0 py-16 md:py-0">
          <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-bold text-white leading-tight mb-6">
            <span className="whitespace-nowrap">AI-Powered Platform</span><br />
            <span className="whitespace-nowrap">Revolutionizing Solar</span>
          </h1>
          <p className="text-2xl font-normal text-text-light max-w-[540px]">
            Autonomous AI Agents for Operations & Maintenance in utility-scale solar plants
          </p>
        </div>
      </div>
    </section>
  )
}

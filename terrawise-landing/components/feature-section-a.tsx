import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FeatureSectionA() {
  return (
    <section className="py-20 bg-white" id="technology">
      <div className="container max-w-content-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content - 55% on desktop */}
          <div className="md:pr-8">
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-charcoal mb-6">
              Your teammate in the field.
            </h2>
            <p className="text-lg text-text-secondary max-w-[420px] mb-8">
              Terrawise rovers are autonomously navigate entire solar farms, performing inspections with precision and care.
              Anomalies, from cracks to hotspots, are surfaced early and automatically so you can act before issues grow.
            </p>
            {/* <Button className="rounded-button bg-charcoal/90 hover:bg-charcoal text-white text-sm font-semibold px-5 border-0">
              Learn more
            </Button> */}
          </div>

          {/* Robot image - clean presentation without background circle or shadow */}
          <div className="relative h-full flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Robot image */}
              <div className="relative w-full h-full p-8">
                <Image src="/images/rover.png" alt="Helios Robot" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

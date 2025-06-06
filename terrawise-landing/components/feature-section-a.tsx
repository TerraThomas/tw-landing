import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FeatureSectionA() {
  return (
    <section className="py-20 bg-white" id="technology">
      <div className="container max-w-content-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Robot image - clean presentation without background circle or shadow */}
          <div className="relative h-full flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Robot image */}
              <div className="relative w-full h-full p-8">
                <Image src="/images/rover.png" alt="Helios Robot" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Text content - 55% on desktop */}
          <div className="md:pl-8">
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-charcoal mb-6">
            Your Personalized O&M Assistant            </h2>
            <p className="text-lg text-text-secondary max-w-[420px] mb-8">
            TerraWise Rovers autonomously learn and navigate your entire solar farm, performing inspections with precision and care. From cracks to connectors, anomalies are detected early and automatically—so you can maximize energy output. When needed, operators can take remotely operate the robot from anywhere in the world for targeted, on-demand inspections. 
            </p>
            {/* <Button className="rounded-button bg-charcoal/90 hover:bg-charcoal text-white text-sm font-semibold px-5 border-0">
              Learn more
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

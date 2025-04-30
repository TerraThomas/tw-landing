import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/ContactFormModal"

export default function FeatureSectionB() {
  return (
    <section className="py-20 relative bg-sky-100 bg-gradient-to-br from-sky-100 to-blue-200 md:clip-angle-top">
      <div className="container max-w-content-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image - left on desktop */}
          <div className="order-2 md:order-1 relative h-full flex justify-center">
            <div className="relative w-full aspect-video">
              <Image
                // src="/placeholder.svg?height=400&width=600"
                src="/images/data-placeholder.jpg"
                alt="Solar Maintenance Automation"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Text content - right on desktop */}
          <div className="order-1 md:order-2 md:pl-8">
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-gray-900 mb-6">The future of solar maintenance.</h2>
              <p className="text-lg text-gray-800 max-w-[420px] mb-8">
                Traditional solar O&M is labor-intensive and inefficient. 
                Our user platform streamlines the process by providing intuitive tools for visualizing anomalies, identifying risk factors, and easily monitoring rover activity in real time.
              </p>
            <ContactFormModal
              trigger={
                <Button className="rounded-button bg-charcoal/90 hover:bg-charcoal text-white text-sm font-semibold px-5 border-0">
                  Get in Touch
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

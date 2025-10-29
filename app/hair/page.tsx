import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { hairServices } from "@/data/hairServices";

export default function HairPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4">
            Hair Services
          </h1>
          <p className="text-xl text-secondary-100 max-w-2xl mx-auto">
            Expert hair care tailored to your unique style and needs. Book your
            appointment today!
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Ready to Book?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule your appointment using our easy booking system. Choose
              your service, pick a time, and we'll take care of the rest!
            </p>

            {/* Calendly Embed - We'll add this in Phase 5 */}
            <div className="bg-gray-100 rounded-lg p-12 mb-6">
              <p className="text-gray-500 italic">
                📅 Booking calendar will be embedded here
              </p>
            </div>

            <p className="text-sm text-gray-500">
              Prefer to call? Reach us at{" "}
              <span className="font-semibold">(555) 123-4567</span>
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Our Work
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Placeholder gallery - we can add real images later */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Photo {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

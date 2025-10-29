import Link from "next/link";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import { hairServices } from "@/data/hairServices";
import { artProducts } from "@/data/artProducts";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 mb-6">
              Where <span className="text-primary-500">Art</span> Meets{" "}
              <span className="text-secondary-600">Beauty</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional hair styling and original artwork, all in one place.
              Express yourself inside and out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hair">
                <Button variant="primary" size="lg">
                  Book Hair Appointment
                </Button>
              </Link>
              <Link href="/art">
                <Button variant="outline" size="lg">
                  Shop Art Prints
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hair Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Hair Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional styling for your natural beauty. From protective
              styles to silk presses, we've got you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {hairServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/hair">
              <Button variant="secondary">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Art Shop Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Original Artwork
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bring creativity into your space with unique prints and products
              featuring original artwork.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {artProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/art">
              <Button variant="primary">Browse Art Shop</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Express Yourself?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you need a fresh style or want to add art to your walls,
            we're here for you.
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

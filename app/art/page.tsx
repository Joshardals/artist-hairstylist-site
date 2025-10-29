"use client";

import { useState } from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import { artProducts } from "@/data/artProducts";
import { ArtProduct } from "@/types";

export default function ArtPage() {
  const [selectedProduct, setSelectedProduct] = useState<ArtProduct | null>(
    null
  );
  const [filter, setFilter] = useState<string>("all");

  const filteredProducts =
    filter === "all"
      ? artProducts
      : artProducts.filter((p) => p.category === filter);

  const handleBuyNow = (product: ArtProduct) => {
    // For prototype: You can add real product URLs in your data file
    // Example: window.open(product.buyLink, '_blank');

    // For now, show an alert (or you can link to a demo Gumroad/Printful page)
    alert(
      `Purchasing: ${product.title}\n\nIn production, this would redirect to the payment page.`
    );
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4">Art Shop</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Original artwork, prints, and products to bring creativity into your
            space.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === "all"
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("prints")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === "prints"
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Prints
            </button>
            <button
              onClick={() => setFilter("apparel")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === "apparel"
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Apparel
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Modal
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      >
        {selectedProduct && (
          <div className="p-8">
            <div className="relative h-96 w-full mb-6 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">
              {selectedProduct.title}
            </h2>
            <p className="text-lg text-gray-500 mb-4">{selectedProduct.size}</p>
            <p className="text-gray-700 mb-6">{selectedProduct.description}</p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-accent-600">
                ${selectedProduct.price}
              </span>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full capitalize">
                {selectedProduct.category}
              </span>
            </div>
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => handleBuyNow(selectedProduct)}
            >
              Buy Now
            </Button>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
              <span>🔒</span>
              <span>Secure checkout via our print-on-demand partner</span>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

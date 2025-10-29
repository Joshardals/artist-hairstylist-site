import Image from "next/image";
import Card from "./Card";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  size: string;
  image: string;
  onClick?: () => void;
}

export default function ProductCard({
  title,
  description,
  price,
  size,
  image,
  onClick,
}: ProductCardProps) {
  return (
    <Card hover className="overflow-hidden" onClick={onClick}>
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-heading font-bold text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{size}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-accent-600">${price}</p>
          <span className="text-sm text-primary-500 font-medium hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </Card>
  );
}

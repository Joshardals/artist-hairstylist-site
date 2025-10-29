import Image from "next/image";
import Card from "./Card";

interface ServiceCardProps {
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
}

export default function ServiceCard({
  name,
  description,
  price,
  duration,
  image,
}: ServiceCardProps) {
  return (
    <Card hover className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold text-primary-500">${price}</p>
            <p className="text-sm text-gray-500">{duration}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

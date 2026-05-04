import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface FoodCardProps {
  name: string;
  price: string;
  description: string;
  imageKey: string;
}

export default function FoodCard({
  name,
  price,
  description,
  imageKey,
}: FoodCardProps) {
  const imageData = PlaceHolderImages.find((img) => img.id === imageKey);

  return (
    <div className="group cursor-default">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-4">
        {imageData && (
          <Image
            src={imageData.imageUrl}
            alt={name}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            data-ai-hint={imageData.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="text-sm font-headline tracking-widest uppercase text-primary">
          {name}
        </h3>
        <span className="text-xs text-accent font-medium">{price}</span>
      </div>
      <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-2">
        {description}
      </p>
    </div>
  );
}

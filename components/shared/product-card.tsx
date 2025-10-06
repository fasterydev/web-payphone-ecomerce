"use client";
import { createOrder } from "@/actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  productId: string;
  name: string;
  price: number;
  badge?: string;
}

export function ProductCard({
  productId,
  name,
  price,
  badge,
}: ProductCardProps) {
  const router = useRouter();
  const createOrderApi = async (productId: string) => {
    // En produccion se debe enviar el id de producto y el backend debe crear la orden con el producto
    try {
      const res = await createOrder(productId);
      if (res?.statusCode === 201) {
        router.push(`/payphone?id=${res.order.id}`);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <Card className="group relative overflow-hidden border-border bg-card transition-all hover:shadow-lg hover:shadow-primary/5 py-0">
      {/* Badge */}
      {badge && (
        <div className="absolute left-3 top-3 z-10 rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
          {badge}
        </div>
      )}

      {/* Favorite Button */}
      <button
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-all hover:bg-background hover:scale-110"
        aria-label="Add to favorites"
      >
        <Heart className="h-4 w-4 text-foreground" />
      </button>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted mb-0">
        <Image
          src={"https://placehold.co/600x600.png"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 px-4 pb-4 -mt-2">
        {/* Product Name */}
        <h3 className=" text-balance font-semibold leading-tight text-card-foreground line-clamp-2">
          {name}
        </h3>

        {/* Price Section */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-card-foreground">
            ${price.toFixed(2)}
          </span>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => createOrderApi(productId)}
          className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          <ShoppingCart className="h-4 w-4" />
          Compra Ahora
        </Button>
      </div>
    </Card>
  );
}

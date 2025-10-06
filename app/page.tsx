import { ProductCard } from "@/components/shared/product-card";

export default function Home() {
  const products = [
    {
      id: "1",
      name: "Wireless Noise-Cancelling Headphones",
      price: 199.99,
      originalPrice: 299.99,
      image: "/modern-wireless-headphones.jpg",
      badge: "Sale",
      category: "Audio",
    },
    {
      id: "2",
      name: "Smart Fitness Watch Pro",
      price: 349.99,
      image: "/premium-smartwatch-fitness-tracker.jpg",
      badge: "New",
      category: "Wearables",
    },
    {
      id: "3",
      name: "Mechanical Gaming Keyboard RGB",
      price: 129.99,
      originalPrice: 179.99,
      image: "/rgb-mechanical-gaming-keyboard.png",
      category: "Gaming",
    },
    {
      id: "4",
      name: "Ultra HD 4K Webcam",
      price: 89.99,
      image: "/professional-4k-webcam.jpg",
      category: "Accessories",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Featured Products
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Discover our curated selection of premium tech products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}

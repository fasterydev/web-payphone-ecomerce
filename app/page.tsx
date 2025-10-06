import { ProductCard } from "@/components/shared/product-card";

export default function Home() {
  const products = [
    {
      id: "1",
      name: "Wireless Noise-Cancelling Headphones",
      price: 3.15,
      badge: "Sale",
      productId: "prod-001",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Productos destacados
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Descubre nuestra selección curada de productos tecnológicos premium
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

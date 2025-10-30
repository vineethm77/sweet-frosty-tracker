import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard, { Product } from "@/components/ProductCard";
import CalorieCounter from "@/components/CalorieCounter";
import { useToast } from "@/hooks/use-toast";
import iceCreamSundae from "@/assets/ice-cream-sundae.jpg";
import blueberryMilkshake from "@/assets/chocolate-shake.jpg"; // 🆕 New image
import strawberrySmoothie from "@/assets/strawberry-smoothie.jpg";

const products: Product[] = [
  {
    id: 1,
    name: "Glass Pudding",
    description:
      "Smooth and chilled pudding served with caramel topping",
    price: 30,
    calories: 250,
    image: iceCreamSundae,
  },
  {
    id: 2,
    name: "Blueberry Milkshake",
    description:
      "Creamy blueberry shake blended with milk and ice cream",
    price: 30, // ✅ Numeric only
    calories: 300,
    image: blueberryMilkshake, // ✅ Updated image
  },
  {
    id: 3,
    name: "Fruit Frosty Sandwich",
    description:
      "Fresh fruit layers with ice cream in a frosty sandwich",
    price: 40,
    calories: 180,
    image: strawberrySmoothie,
  },
];

const Index = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
    toast({
      title: "Added to cart! 🎉",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header cartCount={cart.length} />

      <main>
        <Hero />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-12">
              Featured Treats
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </section>

        <CalorieCounter cartItems={cart} />
      </main>

      <footer className="bg-secondary/50 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Sweet Frosty Bites. Made with ❤️ and lots of ice cream!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

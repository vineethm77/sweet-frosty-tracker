import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard, { Product } from "@/components/ProductCard";
import CalorieCounter from "@/components/CalorieCounter";
import { useToast } from "@/hooks/use-toast";
import iceCreamSundae from "@/assets/ice-cream-sundae.jpg";
import chocolateShake from "@/assets/chocolate-shake.jpg";
import strawberrySmoothie from "@/assets/strawberry-smoothie.jpg";

const products: Product[] = [
  {
    id: 1,
    name: "Ice Cream Sundae",
    description: "Classic vanilla ice cream topped with chocolate syrup, whipped cream, and a cherry",
    price: 6.99,
    calories: 250,
    image: iceCreamSundae,
  },
  {
    id: 2,
    name: "Chocolate Shake",
    description: "Rich and creamy chocolate milkshake made with premium cocoa",
    price: 5.99,
    calories: 300,
    image: chocolateShake,
  },
  {
    id: 3,
    name: "Strawberry Smoothie",
    description: "Fresh strawberries blended with yogurt for a refreshing treat",
    price: 4.99,
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

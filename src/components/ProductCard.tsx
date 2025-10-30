import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  calories: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="gradient-card shadow-card border-border overflow-hidden hover-lift group">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold font-heading text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground mb-3">
          {product.description}
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          {product.calories} kcal
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            <p>₹{product.price.toFixed(2)}</p>

          </span>
          <Button
            onClick={() => onAddToCart(product)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-soft transition-smooth"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;

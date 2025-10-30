import { ShoppingCart } from "lucide-react";

interface HeaderProps {
  cartCount: number;
}

const Header = ({ cartCount }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-bold font-heading text-primary">
            Sweet Frosty Bites 🍨
          </h1>
        </div>
        
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-foreground" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-scale-in">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

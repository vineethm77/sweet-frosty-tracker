import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { Product } from "./ProductCard";

interface CalorieCounterProps {
  cartItems: Product[];
}

const CalorieCounter = ({ cartItems }: CalorieCounterProps) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [showResult, setShowResult] = useState(false);

  const totalCalories = cartItems.reduce((sum, item) => sum + item.calories, 0);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && age && weight && cartItems.length > 0) {
      setShowResult(true);
    }
  };

  const resetForm = () => {
    setName("");
    setAge("");
    setWeight("");
    setShowResult(false);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Calorie Counter
            </h2>
            <p className="text-muted-foreground">
              Track your calorie intake from your Sweet Frosty Bites order
            </p>
          </div>

          <Card className="gradient-card shadow-soft p-6 md:p-8 border-border">
            {!showResult ? (
              <form onSubmit={handleCalculate} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-semibold">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-foreground font-semibold">
                      Age
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Enter your age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                      min="1"
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight" className="text-foreground font-semibold">
                      Weight (kg)
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Enter your weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                      min="1"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                {cartItems.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center">
                    Add items to your cart to calculate calories
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={cartItems.length === 0}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-soft transition-smooth"
                >
                  Calculate Calories
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-6 animate-fade-in">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-heading text-foreground">
                    Hi {name}! 👋
                  </h3>
                  <div className="bg-accent/20 rounded-xl p-6">
                    <p className="text-lg text-foreground mb-2">
                      Your total calorie intake from Sweet Frosty Bites is
                    </p>
                    <p className="text-5xl font-bold text-primary">
                      {totalCalories} kcal
                    </p>
                  </div>
                  
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Age: {age} years</p>
                    <p>Weight: {weight} kg</p>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-semibold text-foreground mb-3">Your Order:</h4>
                    <div className="space-y-2">
                      {cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{item.name}</span>
                          <span className="font-medium text-foreground">{item.calories} kcal</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  onClick={resetForm}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Calculate Again
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalorieCounter;

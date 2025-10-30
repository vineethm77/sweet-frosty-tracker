import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground mb-6 animate-fade-in">
          Cool Treats for Hot Days! ☀️
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Indulge in our delicious selection of frozen delights, refreshing shakes, and smoothies made with love
        </p>
      </div>
    </section>
  );
};

export default Hero;

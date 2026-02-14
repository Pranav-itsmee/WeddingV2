import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const petals = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 8,
  duration: 8 + Math.random() * 6,
  size: 12 + Math.random() * 14,
}));

const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(30 50% 96%) 0%, hsl(20 60% 92%) 30%, hsl(35 45% 93%) 60%, hsl(340 35% 90%) 100%)",
      }}
    >
      {/* Ornate corner decorations */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-30 pointer-events-none">
        <svg viewBox="0 0 200 200" className="text-gold">
          <path d="M0,0 Q50,0 100,50 Q100,100 50,100 Q0,100 0,50 Z" fill="currentColor" opacity="0.15"/>
          <circle cx="20" cy="20" r="3" fill="currentColor"/>
          <circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.7"/>
          <circle cx="60" cy="60" r="2" fill="currentColor" opacity="0.7"/>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 opacity-30 pointer-events-none scale-x-[-1]">
        <svg viewBox="0 0 200 200" className="text-gold">
          <path d="M0,0 Q50,0 100,50 Q100,100 50,100 Q0,100 0,50 Z" fill="currentColor" opacity="0.15"/>
          <circle cx="20" cy="20" r="3" fill="currentColor"/>
          <circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.7"/>
          <circle cx="60" cy="60" r="2" fill="currentColor" opacity="0.7"/>
        </svg>
      </div>
      
      {/* Ornate vertical side borders */}
      <div className="absolute left-0 top-0 bottom-0 w-20 hidden lg:block opacity-30 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 80 1000">
          {/* Repeating ornamental pattern */}
          <path d="M10,0 Q30,50 10,100 Q30,150 10,200 Q30,250 10,300 Q30,350 10,400 Q30,450 10,500 Q30,550 10,600 Q30,650 10,700 Q30,750 10,800 Q30,850 10,900 Q30,950 10,1000" 
                fill="none" 
                stroke="hsl(38 72% 52%)" 
                strokeWidth="1.5" 
                opacity="0.4"/>
          <path d="M70,0 Q50,50 70,100 Q50,150 70,200 Q50,250 70,300 Q50,350 70,400 Q50,450 70,500 Q50,550 70,600 Q50,650 70,700 Q50,750 70,800 Q50,850 70,900 Q50,950 70,1000" 
                fill="none" 
                stroke="hsl(38 72% 52%)" 
                strokeWidth="1.5" 
                opacity="0.4"/>
        </svg>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-20 hidden lg:block opacity-30 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 80 1000">
          <path d="M10,0 Q30,50 10,100 Q30,150 10,200 Q30,250 10,300 Q30,350 10,400 Q30,450 10,500 Q30,550 10,600 Q30,650 10,700 Q30,750 10,800 Q30,850 10,900 Q30,950 10,1000" 
                fill="none" 
                stroke="hsl(38 72% 52%)" 
                strokeWidth="1.5" 
                opacity="0.4"/>
          <path d="M70,0 Q50,50 70,100 Q50,150 70,200 Q50,250 70,300 Q50,350 70,400 Q50,450 70,500 Q50,550 70,600 Q50,650 70,700 Q50,750 70,800 Q50,850 70,900 Q50,950 70,1000" 
                fill="none" 
                stroke="hsl(38 72% 52%)" 
                strokeWidth="1.5" 
                opacity="0.4"/>
        </svg>
      </div>

      {/* Hanging decorative lamps */}
      <div className="absolute top-8 left-1/4 flex flex-col items-center opacity-70 hidden md:block">
        <div className="flex flex-col items-center">
          <div className="w-1 h-12 bg-gradient-to-b from-gold/40 to-gold/20"></div>
          <div className="w-1 h-2 bg-gold/30 rounded-full"></div>
          <div className="w-1 h-2 bg-gold/30 rounded-full mt-1"></div>
          <div className="w-1 h-2 bg-gold/30 rounded-full mt-1"></div>
          <div className="text-4xl mt-2">🏮</div>
        </div>
      </div>
      <div className="absolute top-8 right-1/4 flex flex-col items-center opacity-70 hidden md:block">
        <div className="flex flex-col items-center">
          <div className="w-1 h-12 bg-gradient-to-b from-gold/40 to-gold/20"></div>
          <div className="w-1 h-2 bg-gold/30 rounded-full"></div>
          <div className="w-1 h-2 bg-gold/30 rounded-full mt-1"></div>
          <div className="w-1 h-2 bg-gold/30 rounded-full mt-1"></div>
          <div className="text-4xl mt-2">🏮</div>
        </div>
      </div>
      
      {/* Additional side lamps */}
      <div className="absolute top-32 left-12 flex flex-col items-center opacity-60 hidden lg:block">
        <div className="flex flex-col items-center">
          <div className="w-1 h-16 bg-gradient-to-b from-gold/30 to-gold/15"></div>
          <div className="w-1 h-2 bg-gold/25 rounded-full"></div>
          <div className="w-1 h-2 bg-gold/25 rounded-full mt-1"></div>
          <div className="text-3xl mt-2">🏮</div>
        </div>
      </div>
      <div className="absolute top-32 right-12 flex flex-col items-center opacity-60 hidden lg:block">
        <div className="flex flex-col items-center">
          <div className="w-1 h-16 bg-gradient-to-b from-gold/30 to-gold/15"></div>
          <div className="w-1 h-2 bg-gold/25 rounded-full"></div>
          <div className="w-1 h-2 bg-gold/25 rounded-full mt-1"></div>
          <div className="text-3xl mt-2">🏮</div>
        </div>
      </div>

      {/* Floating petals */}
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petal pointer-events-none"
          style={{
            left: p.left,
            top: "-20px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: `${p.size}px`,
            opacity: 0,
          }}
        >
          🌸
        </div>
      ))}

      {/* Decorative top border pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      <div className="absolute top-2 left-0 right-0">
        <svg className="w-full h-8" preserveAspectRatio="none" viewBox="0 0 1200 40">
          <path d="M0,20 Q300,10 600,20 Q900,30 1200,20" fill="none" stroke="hsl(38 72% 52%)" strokeWidth="0.5" opacity="0.3"/>
          <path d="M0,25 Q300,15 600,25 Q900,35 1200,25" fill="none" stroke="hsl(38 72% 52%)" strokeWidth="0.5" opacity="0.2"/>
        </svg>
      </div>

      <motion.div
        className="text-center px-6 z-10 relative max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Ganesha blessing at top */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* <div className="text-6xl mb-3">🕉️</div>
          <div className="text-5xl mb-2">🐘</div> */}
        </motion.div>

        {/* Ornate arch decoration */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 opacity-20 pointer-events-none hidden md:block">
          <svg viewBox="0 0 600 150" className="w-full h-full text-gold">
            <path d="M50,130 Q50,50 150,30 Q300,10 450,30 Q550,50 550,130" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"/>
            <path d="M80,125 Q80,60 160,45 Q300,30 440,45 Q520,60 520,125" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  opacity="0.6"/>
          </svg>
        </div>
        
        {/* Large decorative lotus flowers on sides */}
        <div className="absolute top-1/2 -left-16 sm:-left-24 -translate-y-1/2 hidden md:block">
          <div className="text-7xl opacity-60">🪷</div>
        </div>
        <div className="absolute top-1/2 -right-16 sm:-right-24 -translate-y-1/2 hidden md:block">
          <div className="text-7xl opacity-60">🪷</div>
        </div>
        
        <p className="font-script text-base md:text-lg text-muted-foreground italic mb-4 tracking-wide">
          With the blessings of the Almighty,
        </p>
        <p className="font-script text-base md:text-lg text-muted-foreground italic mb-6 tracking-wide">
          our parents and elders,
        </p>
        <p className="font-script text-base md:text-lg text-muted-foreground italic mb-6 tracking-wide">
          and by the grace of <span className="text-gold font-semibold">Lord Ganesha</span>,
        </p>
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/40"></div>
          <svg width="30" height="30" viewBox="0 0 30 30" className="text-gold">
            <circle cx="15" cy="15" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="15" cy="15" r="6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          </svg>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/40"></div>
        </div>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground animate-golden-glow leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          Vijayabharathi
        </motion.h1>

        <motion.p
          className="font-script text-2xl md:text-3xl text-gold my-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          &
        </motion.p>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground animate-golden-glow leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.6 }}
        >
          Divyabharathi
        </motion.h1>

        <motion.p
          className="font-script text-base md:text-lg text-muted-foreground mt-8 italic"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.2 }}
        >
          together with our families,
        </motion.p>
        <motion.p
          className="font-script text-base md:text-lg text-muted-foreground italic mb-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.4 }}
        >
          cordially invite you and your family
        </motion.p>
        <motion.p
          className="font-script text-base md:text-lg text-muted-foreground italic"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.6 }}
        >
          to grace the auspicious occasion of our wedding
        </motion.p>
        <motion.p
          className="font-script text-base md:text-lg text-muted-foreground italic"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.8 }}
        >
          and bless us as we begin our sacred journey of life together.
        </motion.p>
      </motion.div>

      {/* Large decorative lotus flowers at bottom corners */}
      <div className="absolute bottom-20 left-8 hidden md:block opacity-50">
        <div className="relative">
          <div className="text-6xl">🪷</div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-3xl">🪷</div>
        </div>
      </div>
      <div className="absolute bottom-20 right-8 hidden md:block opacity-50">
        <div className="relative">
          <div className="text-6xl">🪷</div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-3xl">🪷</div>
        </div>
      </div>

      {/* Bottom decorative border with ornate pattern */}
      <div className="absolute bottom-0 left-0 right-0 pb-2">
        <div className="flex justify-center items-center gap-4 mb-2 opacity-40">
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-gold/40"></div>
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-gold">
            <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.6" />
            <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          </svg>
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-gold/40"></div>
        </div>
        <div className="h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce-arrow text-gold z-20"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 3 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;

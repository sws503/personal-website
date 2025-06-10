import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)',
        }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Hello, I'm <span className="text-secondary">Wooseok Song</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
            Ph.D. Candidate in Artificial Intelligence at GIST
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-80 max-w-3xl mx-auto leading-relaxed">
            Specializing in On-Device Generative AI • Model Compression & Real-Time Edge Deployment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('about')}
              size="lg"
              className="bg-secondary hover:bg-blue-600 text-white px-8 py-4 rounded-full transition duration-300 transform hover:scale-105"
            >
              Explore My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full transition duration-300 bg-transparent"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

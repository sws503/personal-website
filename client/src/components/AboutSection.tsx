import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src="/attached_assets/wooseok picture_1749556893495.jpeg"
              alt="Wooseok Song"
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              About Me
            </h2>
            <p className="text-lg text-main mb-6 leading-relaxed">
              Hello! I'm <strong>Woo-Seok Song</strong>, a Ph.D. candidate in Artificial Intelligence at{' '}
              <strong>Gwangju Institute of Science and Technology (GIST)</strong>, graduating in one semester.
            </p>
            <p className="text-lg text-main mb-6 leading-relaxed">
              My research centres on <strong>on-device generative AI</strong>—model compression, personalised prompt optimisation, and real-time Edge deployment.
            </p>
            <p className="text-lg text-main mb-8 leading-relaxed">
              I specialize in generative model compression (KD, pruning, quantisation), prompt/GA personalisation, and real-time Edge/Embedded deployment. 
              My goal is to work as an AI Research Engineer focusing on Generative AI & Model Optimisation.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-secondary hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300 flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('research')}
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-full transition duration-300"
              >
                View Research
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

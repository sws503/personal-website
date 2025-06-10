import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';

export default function ContactSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="University Campus"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always interested in discussing research opportunities, collaborations, and
            innovative ideas in on-device generative AI and Edge computing.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              asChild
              className="bg-white text-primary hover:bg-opacity-90 px-6 py-3 rounded-full transition duration-300 flex items-center"
            >
              <a href="mailto:wooseok.song@gist.ac.kr">
                <Mail className="w-4 h-4 mr-3" />
                wooseok.song@gist.ac.kr
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-full transition duration-300 bg-transparent flex items-center"
            >
              <a href="https://www.linkedin.com/in/songwooseok" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-3" />
                LinkedIn Profile
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Current Affiliation</h3>
              <p className="opacity-90">
                Gwangju Institute of Science and Technology (GIST)<br />
                AI Graduate School<br />
                Ph.D. Candidate
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Research Interests</h3>
              <p className="opacity-90">
                On-Device Generative AI<br />
                Model Compression<br />
                Edge Computing
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Location</h3>
              <p className="opacity-90">
                Gwangju<br />
                South Korea
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

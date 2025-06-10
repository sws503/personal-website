import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Scan, Users, ExternalLink, ArrowRight } from 'lucide-react';

const researchGoals = [
  {
    icon: Brain,
    title: 'On-Device AI',
    description: 'Model compression, personalized prompt optimization, and real-time Edge deployment',
    color: 'bg-secondary',
  },
  {
    icon: Scan,
    title: 'Generative Models',
    description: 'Knowledge distillation, pruning, and quantization for mobile deployment',
    color: 'bg-accent',
  },
  {
    icon: Users,
    title: 'Edge Computing',
    description: 'Real-time AI systems for automotive and embedded applications',
    color: 'bg-primary',
  },
];

const featuredResearch = [
  {
    title: 'On-Vehicle Generative AI Platform',
    description: 'World-first in-car Edge generative AI infotainment with 24 TOPS NPU optimization. Visual CNN extracts road/weather/time features with KD + pruning achieving 60% model size reduction and 45% latency improvement.',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    badges: [
      { text: '🏆 Hyundai Mobis Grand Prize', variant: 'destructive' as const },
      { text: '2024', variant: 'secondary' as const },
    ],
  },
  {
    title: 'Multi-Sensory Soundscape App',
    description: 'GIST × Hyundai Motor collaboration. Smartphone sensors (audio, IMU) generate personalized functional soundscape with feature-vector streaming and on-device DSP achieving 300ms average latency.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    badges: [
      { text: 'GIST × Hyundai Motor', variant: 'secondary' as const },
      { text: '2023 – Present', variant: 'outline' as const },
    ],
  },
];

export default function ResearchSection() {
  const [goalsRef, goalsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [featuredRef, featuredInView] = useInView({
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
    <>
      {/* Research Goals Section */}
      <section className="py-20 bg-gradient-to-br from-subtle to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            ref={goalsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={goalsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Research Goals
            </h2>
            <p className="text-2xl md:text-3xl font-heading italic text-accent mb-8">
              "Bringing Fun to Those Who Seek It and Hope to Those in Need"
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchGoals.map((goal, index) => {
              const IconComponent = goal.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={goalsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
                >
                  <Card className="text-center p-8 bg-white shadow-lg research-card h-full">
                    <CardContent className="p-0">
                      <div className={`w-16 h-16 ${goal.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                        {goal.title}
                      </h3>
                      <p className="text-main">{goal.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Research Section */}
      <section id="research" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            ref={featuredRef}
            initial={{ opacity: 0, y: 30 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Research Projects
            </h2>
            <p className="text-xl text-main max-w-3xl mx-auto">
              Cutting-edge research in on-device generative AI, model compression, and Edge deployment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {featuredResearch.map((research, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={featuredInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
              >
                <Card className="research-card bg-gradient-to-br from-subtle to-white shadow-lg h-full">
                  <CardContent className="p-8">
                    <img
                      src={research.image}
                      alt={research.title}
                      className="w-full h-48 object-cover rounded-xl mb-6"
                    />
                    <div className="flex items-center mb-4 flex-wrap gap-2">
                      {research.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant={badge.variant} className="text-sm font-medium">
                          {badge.text}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                      {research.title}
                    </h3>
                    <p className="text-main mb-4">{research.description}</p>
                    <div className="flex items-center text-secondary cursor-pointer hover:text-blue-600 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="font-medium">View Publication</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}  
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="text-center"
          >
            <Button
              onClick={() => scrollToSection('publications')}
              className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-full transition duration-300 inline-flex items-center"
            >
              <span className="mr-2">View All Publications</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Scan, Users, ExternalLink, ArrowRight } from 'lucide-react';

const researchGoals = [
  {
    icon: Brain,
    title: 'Intuitive Systems',
    description: 'Crafting Intuitive Systems for Unique Sensory Experiences',
    color: 'bg-secondary',
  },
  {
    icon: Scan,
    title: 'VR & Haptic Innovation',
    description: 'Merging Virtual Reality and Human Sensation with Cutting-Edge Haptic Innovations',
    color: 'bg-accent',
  },
  {
    icon: Users,
    title: 'Human Interaction',
    description: 'Creating Value through the Fusion of Virtual Environments and Human Interaction',
    color: 'bg-primary',
  },
];

const featuredResearch = [
  {
    title: 'TelePulse',
    description: 'Enhancing the Teleoperation Experience through Biomechanical Simulation-Based Electrical Muscle Stimulation in Virtual Reality',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    badges: [
      { text: '🏆 Best Paper', variant: 'destructive' as const },
      { text: 'CHI 2025', variant: 'secondary' as const },
    ],
  },
  {
    title: 'ErgoPulse',
    description: 'Electrifying Your Lower Body With Biomechanical Simulation-based Electrical Muscle Stimulation Haptic System in Virtual Reality',
    image: 'https://images.unsplash.com/photo-1626387346567-c2b3f4b8b0aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    badges: [
      { text: '🏆 Honorable Mention', variant: 'destructive' as const },
      { text: 'CHI 2024', variant: 'secondary' as const },
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
              Featured Research
            </h2>
            <p className="text-xl text-main max-w-3xl mx-auto">
              Cutting-edge research in VR/AR systems, haptic feedback, and human-computer interaction
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

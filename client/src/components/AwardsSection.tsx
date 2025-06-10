import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Medal, GraduationCap } from 'lucide-react';

const awards = [
  {
    title: 'Hyundai Mobis Edge AI Grand Prize',
    venue: '2024',
    description: 'World-first in-car Edge generative AI infotainment system',
    icon: Trophy,
    color: 'bg-accent',
  },
  {
    title: 'StarCraft II AI Day Grand Prize',
    venue: '2018 & 2023',
    description: 'First place in AI competition (2 times)',
    icon: Medal,
    color: 'bg-secondary',
  },
  {
    title: 'Dream AI Open Challenge Mayor\'s Award',
    venue: '2020',
    description: 'Gwangju Mayor Award for Drama BGM AI',
    icon: Trophy,
    color: 'bg-primary',
  },
  {
    title: 'KIRD Science Content Competition 1st Place',
    venue: '2021',
    description: '"Wonder Dreamer" video content creation',
    icon: Medal,
    color: 'bg-secondary',
  },
];

export default function AwardsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-primary mb-6">
            Awards & Honors
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${award.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                      {award.title}
                    </h3>
                    <p className="text-main mb-2">{award.venue}</p>
                    <p className="text-sm text-main opacity-75">{award.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

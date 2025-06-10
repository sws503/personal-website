import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Medal, GraduationCap } from 'lucide-react';

const awards = [
  {
    title: 'Best Paper Award',
    venue: 'CHI 2025 Conference',
    description: 'Top 1% of conference papers',
    icon: Trophy,
    color: 'bg-accent',
  },
  {
    title: 'Honorable Mentions',
    venue: 'CHI 2024 Conference',
    description: 'Top 5% of conference papers',
    icon: Medal,
    color: 'bg-secondary',
  },
  {
    title: 'Fellowship',
    venue: 'University of Washington',
    description: 'Gell Mason Endowed Fellowship',
    icon: GraduationCap,
    color: 'bg-primary',
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

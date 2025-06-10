import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';

const activities = [
  {
    title: 'Multi-Sensory Soundscape App (GIST)',
    role: 'Project Lead',
    period: '2023 – Present',
    description: 'Leading DSP pipeline & personalisation logic development for smartphone sensor-based functional soundscape generation with 300ms latency optimization.',
    side: 'left',
  },
  {
    title: 'GIST Society of Automotive Engineers',
    role: 'Founder',
    period: '2020 – 2022',
    description: 'Founded automotive engineering club focusing on steering-system design. Successfully secured USD 10k grant for project development and club operations.',
    side: 'right',
  },
  {
    title: 'GIST Broadcasting Station',
    role: 'Founder',
    period: '2019 – 2020',
    description: 'Built comprehensive video studio infrastructure at GIST. Managed video production operations and secured USD 30k grant for equipment and facility development.',
    side: 'left',
  },
];

export default function ActivitiesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Extra Activities
          </h2>
          <p className="text-xl text-main max-w-3xl mx-auto">
            Leadership, innovation, and community engagement throughout my academic journey
          </p>
        </motion.div>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: activity.side === 'left' ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
            >
              <Card className={`shadow-lg bg-gradient-to-r ${
                activity.side === 'left' 
                  ? 'from-subtle to-white' 
                  : 'from-white to-subtle'
              }`}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-lg text-secondary font-medium mb-3">
                        {activity.role}
                      </p>
                      <p className="text-main mb-4">{activity.description}</p>
                    </div>
                    <div className="text-accent font-medium mt-4 md:mt-0 md:ml-8">
                      {activity.period}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

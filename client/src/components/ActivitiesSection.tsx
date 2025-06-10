import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';

const activities = [
  {
    title: 'GIST Society of Automotive Engineers',
    role: 'Founder',
    period: 'Oct 2020 – Mar 2022',
    description: 'Established GIST College Student Self-Created Automobile Club. Responsible for designing and manufacturing steering systems. Successfully secured over $10,000 in funding from GIST.',
    side: 'left',
  },
  {
    title: 'GIST Broadcasting Station',
    role: 'Founder & Filming/Editing Manager',
    period: 'Mar 2019 – Nov 2020',
    description: 'Established a video production station at GIST. Produced promotional videos for schools and student activities. Secured over $30,000 in funding from GIST.',
    side: 'right',
  },
  {
    title: 'GIST Student Creative Activity Support Initiative',
    role: 'Team Leader',
    period: 'Mar 2020 – Nov 2020',
    description: 'Led COVID-19 Student Club Support Program. Focused on producing and distributing performance/activity videos. Secured over $4,500 in funding.',
    side: 'left',
  },
  {
    title: 'GIST Human Rights Center',
    role: 'Research Intern',
    period: 'Dec 2018 – Mar 2019',
    description: 'Conducted research involving law, ethics, morality, and philosophy of law. Worked under the supervision of Advisor Kim, Gunoo.',
    side: 'right',
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

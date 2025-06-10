import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';

const educationData = [
  {
    institution: 'Gwangju Institute of Science and Technology (GIST)',
    degree: 'Doctor of Philosophy (Ph.D.) - Artificial Intelligence',
    department: 'AI Graduate School',
    period: 'Expected Feb 2026',
    status: 'Ph.D. Candidate',
  },
  {
    institution: 'Gwangju Institute of Science and Technology (GIST)',
    degree: 'Bachelor of Science (B.S.) - Mechanical Engineering',
    department: 'Department of Mechanical Engineering',
    period: 'Completed',
  },
];

export default function EducationSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-heading font-bold text-primary text-center mb-16"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                      <img
                        src="/attached_assets/gist1993_logo_1749556996294.jpeg"
                        alt="GIST Logo"
                        className="w-16 h-16 object-contain rounded-lg bg-gray-50 p-2"
                      />
                      <div>
                        <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
                          {edu.institution}
                        </h3>
                        <p className="text-lg text-secondary font-medium">
                          {edu.degree}
                          {edu.status && (
                            <span className="text-accent ml-2">({edu.status})</span>
                          )}
                        </p>
                        {edu.department && (
                          <p className="text-main">{edu.department}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-accent font-medium mt-4 md:mt-0">
                      {edu.period}
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

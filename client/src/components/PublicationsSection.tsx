import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const publications = [
  {
    title: 'TelePulse: Enhancing Teleoperation Experience',
    description: 'Biomechanical Simulation-Based Electrical Muscle Stimulation in Virtual Reality',
    authors: 'Hwang, S., Kang, S., Oh, J., Park, J., Shin, S., Luo, Y., DelPreto, J., Lee, S., Lee, K., Matusik, W., Rus, D., Kim, S.',
    venue: 'CHI 2025',
    type: 'conference',
    award: 'Best Paper',
  },
  {
    title: 'I Want to Break Free',
    description: 'Enabling User-Applied Active Locomotion in In-Car VR through Contextual Cues',
    authors: 'Gim, B., Hwang, S., Kang, S., Kim, G., Yeo, D., Kim, S.',
    venue: 'CHI 2025',
    type: 'conference',
  },
  {
    title: 'Adaptive Walker',
    description: 'User Intention and Environmentally Aware Intelligent Walker with High-resolution Tactile and IMU Sensor',
    authors: 'Choi, Y., Hwang, S., Moon, J., Lee, H., Yeo, D., Seong, M., Luo, Y., Kim, S., Matusik, W., Rus, D., Kim, K',
    venue: 'ICRA 2025',
    type: 'conference',
  },
  {
    title: 'ErgoPulse',
    description: 'Electrifying Your Lower Body With Biomechanical Simulation-based Electrical Muscle Stimulation',
    authors: 'Hwang, S., Oh, J., Kang, S., Seong, M., Elsharkawy, A., and Kim, S.',
    venue: 'CHI 2024',
    type: 'conference',
    award: 'Honorable Mention',
  },
  {
    title: 'Evaluation of Visual, Auditory, and Olfactory Stimulus-Based Attractors',
    description: 'For Intermittent Reorientation in Virtual Reality Locomotion',
    authors: 'Lee, J., Hwang, S., Kim, K., and Kim, S.',
    venue: 'Virtual Reality',
    type: 'journal',
  },
  {
    title: 'Framework for Enhancing Teleoperation Experience',
    description: 'With Biomechanical Simulation-Based Electrical Muscle Stimulation in VR',
    authors: 'Hwang, S., Kang, S., Oh, J., Park, J., Shin, S., Luo, Y., DelPreto, J., Matusik, W., Rus, D., and Kim, S.',
    venue: 'UbiComp 2024',
    type: 'workshop',
  },
];

const filterOptions = [
  { id: 'all', label: 'All' },
  { id: 'conference', label: 'Conference' },
  { id: 'journal', label: 'Journal' },
  { id: 'workshop', label: 'Workshop' },
];

export default function PublicationsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredPublications = publications.filter(
    pub => activeFilter === 'all' || pub.type === activeFilter
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'conference':
        return 'bg-secondary text-white';
      case 'journal':
        return 'bg-primary text-white';
      case 'workshop':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="publications" className="py-20 bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Publications
          </h2>
          <img
            src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=300"
            alt="Research Conference"
            className="w-full h-48 object-cover rounded-2xl mb-8 shadow-lg"
          />
        </motion.div>

        {/* Publication Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterOptions.map((option) => (
            <Button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              variant={activeFilter === option.id ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full transition duration-300 ${
                activeFilter === option.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
              }`}
            >
              {option.label}
            </Button>
          ))}
        </motion.div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPublications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 flex-wrap gap-2">
                    {pub.award && (
                      <Badge variant="destructive" className="text-sm font-medium">
                        {pub.award}
                      </Badge>
                    )}
                    <Badge className={`text-sm ${getTypeColor(pub.type)}`}>
                      {pub.venue}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary mb-3">
                    {pub.title}
                  </h3>
                  <p className="text-main text-sm mb-4">{pub.description}</p>
                  <p className="text-xs text-main opacity-75">{pub.authors}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

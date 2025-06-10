import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const publications = [
  {
    title: 'Interactive Prompt Permutation Optimisation for Personalised Image Generation',
    description: 'First author research on prompt optimization using genetic algorithms for personalized AI image generation',
    authors: 'Song, W. et al.',
    venue: 'TCICT 2024',
    type: 'journal',
  },
  {
    title: 'Interactive GA Approach for Video Digest Suggestion',
    description: 'Co-author research on genetic algorithm applications for video content optimization',
    authors: 'Co-authored with research team',
    venue: 'GECCO 2023',
    type: 'conference',
  },
  {
    title: 'Diffusion Model Fine-Tuning for On-Device AI',
    description: 'Solo Ph.D. dissertation research on optimizing diffusion models for mobile deployment',
    authors: 'Song, W.',
    venue: 'Ph.D. Dissertation',
    type: 'thesis',
  },
  {
    title: 'In-Car Soundscape Generative AI System',
    description: 'Patent filing for automotive AI soundscape technology developed for Hyundai Mobis',
    authors: 'Song, W. et al.',
    venue: 'Patent Filing 2024',
    type: 'patent',
  },
];

const filterOptions = [
  { id: 'all', label: 'All' },
  { id: 'journal', label: 'Journal' },
  { id: 'conference', label: 'Conference' },
  { id: 'thesis', label: 'Thesis' },
  { id: 'patent', label: 'Patent' },
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
      case 'journal':
        return 'bg-primary text-white';
      case 'conference':
        return 'bg-secondary text-white';
      case 'thesis':
        return 'bg-accent text-white';
      case 'patent':
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

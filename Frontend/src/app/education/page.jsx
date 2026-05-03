"use client";
import { motion } from 'framer-motion'
import SectionTitle from '../../components/SectionTitle'
import Card from '../../components/Card'
import Badge from '../../components/Badge'
import { Calendar, Medal, BookOpen } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'CodingGita × Rai University Ahmedabad',
    duration: '2024 - Ongoing',
    grade: 'CGPA: 9.30/10',
    achievements: [
      'Currently in 4th Semester',
      'Building solid foundation in core technologies',
      'Active participation in hands-on projects'
    ],
    icon: BookOpen,
  },
  {
    degree: 'Higher Secondary Education (HSC) - Science',
    institution: 'Shri Swastik Higher Secondary School, Palanpur',
    duration: '2022 - 2024',
    grade: 'Percentile Rank: 69.17',
    achievements: [
      'Focused approach during higher secondary education',
      'Strong foundation in Mathematics and Computer Science',
      'Completed with solid academic performance'
    ],
    icon: Medal,
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Shri T.D.Shah Vidhyalay, Palanpur',
    duration: '2020 - 2022',
    grade: 'Percentile Rank: 84.17',
    achievements: [
      'Strong academic foundation',
      'Consistent performance throughout the year',
      'Demonstrated dedication and focus in studies'
    ],
    icon: Medal,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export default function Education({ collapsed }) {
  const mainContent = 'md:pl-[352px] md:pr-[64px]'

  return (
    <main className={`flex-1 min-h-screen pt-8 pb-16 px-4 ${mainContent} transition-all duration-300`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl"
      >
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and qualifications"
        />
      </motion.div>

      {/* Education Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mt-16"
      >
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-secondary" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {education.map((edu, index) => {
              const Icon = edu.icon

              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex gap-8 md:gap-12 items-start md:items-center"
                >
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="hidden md:flex relative z-10 flex-shrink-0"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary border-4 border-accent shadow-glow flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <Card className="flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b border-accent/20">
                      <div>
                        <h3 className="font-poppins font-bold text-xl text-accent mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-400 font-inter">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg flex-shrink-0">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="font-inter font-bold text-accent text-sm whitespace-nowrap">
                          {edu.duration}
                        </span>
                      </div>
                    </div>

                    {edu.grade && (
                      <p className="text-gray-400 font-inter text-[15px] mb-4">
                        <span className="text-accent font-bold">{edu.grade}</span>
                      </p>
                    )}

                    {/* Highlights */}
                    <div className="space-y-2">
                      <p className="text-gray-400 font-inter text-sm font-medium">Highlights:</p>
                      <ul className="space-y-2">
                        {edu.achievements.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-gray-300 font-inter text-sm"
                          >
                            <span className="w-2 h-2 rounded-full bg-secondary" />
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>


    </main>
  )
}


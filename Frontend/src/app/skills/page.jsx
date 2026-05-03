"use client";
import { motion } from 'framer-motion'
import SectionTitle from '../../components/SectionTitle'
import Card from '../../components/Card'
import { Code2, Database, Server, Wrench, Network, Wifi } from 'lucide-react'
import {
  SiReact,
  SiReactrouter,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiMysql,
  SiGit,
  SiDocker,
  SiGithub,
} from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa'

const skillCategories = [
  {
    name: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#E2E8F0' },
      { name: 'Framer Motion', icon: SiFramer, color: '#E2E8F0' },
    ]
  },
  {
    name: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#E2E8F0' },
      { name: 'Java', icon: FaJava, color: '#F89820' },
      { name: 'REST APIs', icon: Network, color: '#D4AF37' },
      { name: 'WebSockets', icon: Wifi, color: '#D4AF37' },
    ]
  },
  {
    name: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'SQL', icon: Database, color: '#D4AF37' },
    ]
  },
  {
    name: 'Tools & DevOps',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'GitHub', icon: SiGithub, color: '#E2E8F0' },
    ]
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function SkillTile({ name, icon: Icon, color }) {
  return (
    <motion.div
      variants={item}
      className="group"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-accent/30 via-white/5 to-secondary/10">
        <div className="relative rounded-2xl bg-white/[0.03] border border-white/[0.06] px-5 py-6 overflow-hidden transition-all duration-300 group-hover:border-accent/30 group-hover:bg-white/[0.05]">
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute -inset-16 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.18),transparent_55%)]" />
          </div>

          <div className="relative flex flex-col items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-black/20 border border-white/[0.06] flex items-center justify-center shadow-[inset_0_0_18px_rgba(0,0,0,0.45)]">
              <Icon className="h-7 w-7" style={{ color: color || '#D4AF37' }} />
            </div>
            <div className="text-[12px] tracking-wide font-inter font-semibold text-gray-300 text-center">
              {name}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills({ collapsed }) {
  const mainContent = 'md:pl-[352px] md:pr-[64px]'

  return (
    <main className={`w-full min-h-screen pt-8 pb-16 px-4 ${mainContent} transition-all duration-300`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl"
      >
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I'm proficient with"
        />
      </motion.div>

      {/* Skills Sections */}
      <motion.div
        className="max-w-5xl mt-16 space-y-12"
      >
        {skillCategories.map((category) => {
          const CategoryIcon = category.icon

          return (
            <div key={category.name}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/15">
                  <CategoryIcon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-xl md:text-2xl text-gray-100">
                    {category.name}
                  </h3>
                </div>
              </div>

              <Card hover={false} className="p-5 md:p-6">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5"
                >
                  {category.skills.map((skill) => (
                    <SkillTile
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      color={skill.color}
                    />
                  ))}
                </motion.div>
              </Card>
            </div>
          )
        })}
      </motion.div>

    </main>
  )
}


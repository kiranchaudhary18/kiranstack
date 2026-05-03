"use client";
import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import Card from '../../components/Card'
import Badge from '../../components/Badge'
import { ExternalLink, Github, Youtube, BookOpen } from 'lucide-react'

const projects = [
  {
    id: 'mediconnect',
    title: 'MediConnect - HealthCare Platform',
    category: 'MERN',
    description: 'Developed a role-based healthcare web application featuring separate dashboards for Doctors, Patients, and Students. Included real-time chat, appointment management, analytics, and an AI assistant.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    liveUrl: 'https://www.mediconnecthub.in/',
    codeUrl: 'https://github.com/kiranchaudhary18/MediConnect',
    apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sB3dVNTGX',
    demoVideoUrl: 'https://www.youtube.com/watch?v=neJ0EiRdYfg&t=21s'
  },
  {
    id: 'convohub',
    title: 'ConvoHub — Real-Time Chat & Group Communication Platform',
    category: 'MERN',
    description: 'A modern full-stack real-time chat application featuring one-to-one and group messaging, live message delivery with WebSockets, secure authentication, and interactive SaaS-style UI.',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1770270006/Gemini_Generated_Image_u5hcjsu5hcjsu5hc_dikn5v.png',
    tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS', 'JWT'],
    liveUrl: 'https://www.convohub.in/',
    codeUrl: 'https://github.com/kiranchaudhary18/ConvoHub',
    apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sBXc8nhpT',
    demoVideoUrl: 'https://www.youtube.com/watch?v=fxHiUyQCfhA'
  },
  {
    id: 'tattoos',
    title: 'Tattoos_studio_website',
    category: 'MERN',
    description: 'Designed and developed a user-friendly platform where tattoo lovers can discover styles, find artists, and learn about tattoo care. Integrated a virtual preview feature to enhance decision-making.',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767986231/Gemini_Generated_Image_tscffbtscffbtscf_as4mit.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    liveUrl: 'https://tattoos-dreamers-studio.onrender.com/',
    codeUrl: 'https://github.com/kiranchaudhary18/tattoos_website',
    apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sAYX2P4dZ',
    demoVideoUrl: 'https://www.youtube.com/watch?v=iLgs_iYD_4c'
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce-forever',
    category: 'MERN',
    description: 'A modern full-stack fashion e-commerce application featuring dynamic product filtering, responsive layouts, consistent image handling, and a complete product detail and cart flow.',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767986615/Gemini_Generated_Image_h1dvxih1dvxih1dv_jd4a1i.png',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Stripe', 'Razorpay'],
    liveUrl: 'https://forever360.in/',
    codeUrl: 'https://github.com/kiranchaudhary18/Ecommerce-app',
    apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sBXVeFXoG',
    demoVideoUrl: 'https://youtu.be/d-qHYIlwKHE'
  },
  {
    id: 'gearguard',
    title: 'GearGuard - Hackathon Project',
    category: 'MERN',
    description: 'Designed a full-stack Maintenance ERP system with role-based access and Kanban/calendar workflows for efficient asset and maintenance management.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    liveUrl: 'https://gearguard-qpbj.onrender.com/login',
    codeUrl: 'https://github.com/kiranchaudhary18/OdooXadani',
    apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sBXVeGCzQ',
    demoVideoUrl: 'https://drive.google.com/file/d/1JetVrzQsU51tw1rL5dr11Vbtm0acdaT_/view?usp=sharing'
  },
  {
    id: 'meditrack',
    title: 'MediTrack — Smart Medication Adherence & Patient Monitoring',
    category: 'MERN',
    description: 'A full-stack healthcare platform that helps patients manage medication schedules and enables caregivers to monitor adherence metrics systematically.',
    image: 'https://images.unsplash.com/photo-1580281657527-47f249e0a7c8?w=500&h=300&fit=crop',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Socket.IO', 'Tailwind CSS'],
    liveUrl: '#',
    codeUrl: 'https://github.com/kiranchaudhary18/craftathon',
    apiDocsUrl: '#',
    demoVideoUrl: '#'
  },
  {
    id: 'expirio',
    title: 'Expirio - Smart Expiry Tracker',
    category: 'React Native',
    description: 'A full-stack mobile app that helps users track expiry dates of products and subscriptions using barcode scanning, reminders, and cloud storage.',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1772776110/Screenshot_2026-03-06_111840_sv9cbj.png',
    tech: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Barcode Scanner'],
    liveUrl: 'https://github.com/kiranchaudhary18/Expirio/releases/download/Expirio-v1.0.apk/Expirio.apk',
    codeUrl: 'https://github.com/kiranchaudhary18/Expirio/',
    apiDocsUrl: '#',
    demoVideoUrl: '#'
  },
  {
    id: 'booknest',
    title: 'BookNest - Book Management App',
    category: 'React Native',
    description: 'A full-stack mobile app to manage and organize books with authentication, image uploads, and cloud storage.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=300&fit=crop',
    tech: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    liveUrl: 'https://github.com/kiranchaudhary18/BookNest/releases/download/v1.0/BookNest.apk',
    codeUrl: 'https://github.com/kiranchaudhary18/BookNest',
    apiDocsUrl: '#',
    demoVideoUrl: '#'
  },
  {
    id: 'codereview',
    title: 'Code Review & Bug Finder',
    category: 'MERN',
    description: 'AI-powered Code Review tool that detects bugs, security issues, and optimizes your code — with refactoring and full review history.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tech: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
    liveUrl: 'https://code-review-and-bug-finder-in-rx4a.onrender.com/',
    codeUrl: 'https://github.com/kiranchaudhary18/code_review_and_bug_finder',
    apiDocsUrl: '#',
    demoVideoUrl: '#'
  },
  {
    id: 'habittracker',
    title: 'Habit-Tracker',
    category: 'Other',
    description: 'A React module to track daily tasks, search meals, and manage information utilizing local persistence.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop',
    tech: ['Next.js', 'MongoDB', 'Markdown', 'Auth0'],
    liveUrl: 'https://ai-habit-tracker-45qa.onrender.com',
    codeUrl: 'https://github.com/kiranchaudhary18/Habit_Tracker',
    apiDocsUrl: '#',
    demoVideoUrl: '#'
  },
  {
    id: 'apihub',
    title: 'API Explorer Hub',
    category: 'Other',
    description: 'A React app to search meals, characters, cocktails, and public info using multiple public APIs — fast and dynamic UI.',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753954845/AJfQ9KR4NI61mWhshnNJXFzO3caqqk2adqqAS92yby4OdTXLFhCxSAQuheOlv4NqOD2wztsWxtDtgTDfa_6Tpal95bCXZakF3A_cBoe8SiZmkYc4gu_lKUhkdUs2T8b9UkpAgQv3yC0GAEddvb87nSwSIqsAw7MwqBYEUjVnZsfL7znTuVUY_1_txupui_moedzc.png',
    tech: ['React', 'Express.js', 'REST API'],
    liveUrl: 'https://react-api-1.onrender.com/',
    codeUrl: 'https://github.com/kiranchaudhary18/React-API',
    apiDocsUrl: '#',
    demoVideoUrl: '#'
  },
  {
    id: 'memegen',
    title: 'Meme-generator',
    category: 'Other',
    description: 'A meme generator that lets users upload or choose images, customize text styles, and download memes instantly.',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767985896/Screenshot_2026-01-10_004226_l5btua.png',
    tech: ['React', 'REST API', 'Gemini API'],
    liveUrl: 'https://meme-generator-pi-sepia.vercel.app/',
    codeUrl: 'https://github.com/kiranchaudhary18/Meme-generator',
    apiDocsUrl: '#',
    demoVideoUrl: '#'
  },
  {
    id: 'youplayx',
    title: 'YouPlayX',
    category: 'Other',
    description: 'A Youtube clone in React with real time video search and playback using the YouTube API- clean and Responsive UI',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753941530/Y19wYWQsd18yMDAsaF8zMDA_2_a1bkss.png',
    tech: ['React', 'REST API', 'Express'],
    liveUrl: 'https://youtube-com-1.onrender.com/',
    codeUrl: 'https://github.com/kiranchaudhary18/youtube.com',
    apiDocsUrl: '#',
    demoVideoUrl: '#'
  },
  {
    id: 'cartoonnetwork',
    title: 'Cartoon NetWork',
    category: 'Other',
    description: 'A fun and interactive website clone of the Cartoon Network homepage, built purely with HTML and CSS.',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753954396/cartton_evgbvg_1_i43ioq.png',
    tech: ['HTML', 'CSS'],
    liveUrl: 'https://cartoon-website-1.netlify.app/',
    codeUrl: 'https://github.com/kiranchaudhary18/youtube.com',
    apiDocsUrl: '#',
    demoVideoUrl: '#'
  },
  {
    id: 'digigold',
    title: 'DigiGold',
    category: 'Other',
    description: 'A clean and modern landing page for a digital gold platform, designed to be fully responsive using HTML and CSS.',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753954556/digigold_tijeho_1_um7bq0.png',
    tech: ['HTML', 'CSS'],
    liveUrl: 'https://digigold-1.netlify.app/',
    codeUrl: 'https://github.com/kiranchaudhary18/digigold',
    apiDocsUrl: '#',
    demoVideoUrl: '#'
  },
  {
    id: 'codinggita',
    title: 'CodingGita Clone in FIGMA',
    category: 'Other',
    description: 'A UI/UX design prototype for an application interface, created with Figma to ensure a seamless user experience.',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753956418/codinggita-logo_urbgxt_ocbtxz.png',
    tech: ['FIGMA'],
    liveUrl: 'https://www.figma.com/proto/E6bEiKGItd1H4CJyOPvKkQ/Food?page-id=0%3A1&node-id=37-360&starting-point-node-id=37%3A360&t=UH6IWR19sFSCTdtW-1',
    codeUrl: '#',
    apiDocsUrl: '#',
    demoVideoUrl: '#'
  }
]

const filters = ['all', 'MERN', 'React Native', 'Other']

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

export default function Projects({ collapsed }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category.replace(/\s+/g, '').toLowerCase() === activeFilter.replace(/\s+/g, '').toLowerCase())

  const mainContent = 'md:pl-[328px] md:pr-[64px]'

  return (
    <main className={`w-full min-h-screen pt-4 sm:pt-6 md:pt-8 pb-16 px-4 sm:px-6 ${mainContent} transition-all duration-300`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl"
      >
        <SectionTitle 
          title="My Projects" 
          subtitle="A selection of extensive applications and software interfaces I've built"
        />
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mt-12 mb-12"
      >
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-inter font-medium text-sm transition-all capitalize ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-accent to-secondary text-primary'
                  : 'border border-accent text-accent hover:bg-accent/10'
              }`}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        key={activeFilter}
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Card className="h-full flex flex-col group overflow-hidden">
              {/* Project Image */}
              <div className="w-full h-44 rounded-lg mb-6 overflow-hidden border border-accent/20 bg-accent/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="font-poppins font-bold text-xl mb-2 flex-shrink-0">
                {project.title}
              </h3>

              <p className="text-gray-400 font-inter text-sm mb-6 flex-grow line-clamp-2 hover:line-clamp-none transition-all">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 flex-shrink-0">
                {project.tech.map((tag) => (
                  <Badge key={tag} variant="default">{tag}</Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-accent/20">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-accent text-accent hover:bg-accent/10 transition-colors text-sm font-inter font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                )}
                {project.codeUrl && project.codeUrl !== '#' && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-secondary text-secondary hover:bg-secondary/10 transition-colors text-sm font-inter font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.demoVideoUrl && project.demoVideoUrl !== '#' && (
                  <a
                    href={project.demoVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500/10 transition-colors text-sm font-inter font-medium"
                  >
                    <Youtube className="w-4 h-4" />
                    Video
                  </a>
                )}
                {project.apiDocsUrl && project.apiDocsUrl !== '#' && (
                  <a
                    href={project.apiDocsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors text-sm font-inter font-medium"
                  >
                    <BookOpen className="w-4 h-4" />
                    Docs
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl text-center py-16"
        >
          <p className="text-gray-400 font-inter text-lg">
            No projects found in this category.
          </p>
        </motion.div>
      )}
    </main>
  )
}


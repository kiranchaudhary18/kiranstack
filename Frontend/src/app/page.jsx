"use client";
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code2, Zap, Target, Award, Github, Download, Linkedin, Database, Package, Code, Send, Server, Lightbulb, Braces, Wifi, Cloud, Palette, Grid, Rocket, Smartphone, Mail } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Badge from '../components/Badge'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const homeSkillIcons = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Express', icon: SiExpress, color: '#E2E8F0' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#E2E8F0' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  const resumeLink = "https://res.cloudinary.com/dnbayngfx/image/upload/v1776667022/Screenshot_2026-04-20_120134_bln0sx.png"
  const homeProjects = [
    {
      id: 'mediconnect',
      title: 'MediConnect - HealthCare Platform',
      short: 'Role-based healthcare app with dashboards, chat, appointments, analytics, and AI assistant.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop',
    },
    {
      id: 'convohub',
      title: 'ConvoHub - Real-Time Chat',
      short: 'Real-time one-to-one and group chat with WebSockets, auth, and invite system.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1770270006/Gemini_Generated_Image_u5hcjsu5hcjsu5hc_dikn5v.png',
    },
    {
      id: 'tattoos',
      title: 'Tattoos Studio Website',
      short: 'Tattoo discovery platform with artist search, care guides, and virtual preview.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767986231/Gemini_Generated_Image_tscffbtscffbtscf_as4mit.png',
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce Forever',
      short: 'Full-stack fashion commerce app with filtering, cart flow, and payment integration.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767986615/Gemini_Generated_Image_h1dvxih1dvxih1dv_jd4a1i.png',
    },
    {
      id: 'expirio',
      title: 'Expirio - Smart Expiry Tracker',
      short: 'A mobile app that helps track expiry dates of products using barcode scanning and cloud storage.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1772776110/Screenshot_2026-03-06_111840_sv9cbj.png',
    },
    {
      id: 'booknest',
      title: 'BookNest - Book Management App',
      short: 'A full-stack mobile app to manage and organize books with authentication and image uploads.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=300&fit=crop',
    },
  ]

  const scrollingProjects = [...homeProjects, ...homeProjects]
  const homeCertificates = [
    {
      id: 'hackthetank',
      title: 'Hack The Tank 3.0 Hackathon',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1772770169/Screenshot_2026-03-05_120418_nrwnb0.png',
    },
    {
      id: 'fedexsmart',
      title: 'FedEx SMART Hackathon - Shaastra 2026',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1772165146/Screenshot_2026-02-27_093117_co2dr3.png',
    },
    {
      id: 'innovatex',
      title: 'Innovate X Hackathon',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1772165149/Screenshot_2026-02-27_093138_qneyzs.png',
    },
    {
      id: 'copilot',
      title: 'Github Copilot Fundamentals',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224760/certificate_of_GitHub_Copilot_pjxglv.png',
    },
    {
      id: 'azure',
      title: 'Introduction to the Basics of Azure Services',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224746/certificate_azura_mfkobw.png',
    },
    {
      id: 'restapi',
      title: 'REST API(intermediate)',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224907/rest_i_gryttf.png',
    },
    {
      id: 'reactfrontend',
      title: 'Frontend Developer React',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224906/react1_s6l27g.png',
    },
  ]

  const scrollingCertificates = [...homeCertificates, ...homeCertificates]

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-primary via-primary to-primary/95 py-8 px-4 md:pl-[352px] md:pr-[64px]">
      <div className="w-full">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {/* Left: Text Content */}
          <div className="md:col-span-2 h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-3"
            >
              <Badge>Full Stack Developer | React Native Developer</Badge>
            </motion.div>

            {/* Premium Tagline */}
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-[11px] md:text-[13px] font-inter font-medium tracking-[0.2em] md:tracking-[0.25em] uppercase mb-2 bg-gradient-to-r from-accent/70 via-yellow-300/60 to-accent/50 bg-clip-text text-transparent"
            >
              Engineering scalable digital solutions with precision, performance, and purpose.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-poppins font-black text-5xl md:text-7xl mb-3 leading-tight"
            >
              Kiran <span className="text-gradient">Dekaliya</span>
            </motion.h1>
            {/* SEO: alternate name for Google indexing */}
            <span className="sr-only">Kiran Chaudhary — Full Stack Developer | React Native Developer | Software Engineer | Ahmedabad, Gujarat, India</span>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg font-inter mb-6 leading-relaxed"
            >
              Kiran Dekaliya (Kiran Chaudhary) — Designing and building robust, scalable software systems focused on performance, reliability, and seamless user experiences while delivering impactful digital solutions for real-world challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <a href="/contact">
                <Button variant="primary" size="lg">
                  Hire Me
                </Button>
              </a>
              <a href="/projects">
                <Button variant="secondary" size="lg">
                  View Work
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right: Resume Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="sticky top-8 md:w-11/12 md:ml-auto"
          >
            <Card className="border-2 border-accent/40 hover:border-accent/80 transition-all overflow-hidden p-5 md:p-6 mix-blend-normal">
              <div className="aspect-[10/9] md:aspect-square relative mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
                <motion.img
                  animate={{ objectPosition: ["center 0%", "center 100%", "center 0%"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  src={resumeLink}
                  alt="Resume"
                  className="w-full h-full object-cover"
                />
              </div>
              <a href={resumeLink} download className="w-full">
                <Button variant="primary" size="md" className="w-full text-[15px] font-semibold py-3 px-4">
                  <Download className="w-[18px] h-[18px] mr-2" />
                  Download Resume
                </Button>
              </a>
            </Card>
          </motion.div>
        </motion.div>

        {/* Stats Grid - 4 Cards in One Line aligned with About Me */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 -mt-12">
          <div className="md:col-span-2">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
            >
              <motion.div
                variants={item}
                className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg p-4 border border-blue-500/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <span className="text-2xl font-bold text-blue-300">15+</span>
                </div>
                <p className="text-gray-400 font-inter text-sm">Projects</p>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-gradient-to-br from-pink-500/20 to-pink-600/10 rounded-lg p-4 border border-pink-500/30 hover:border-pink-400/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <Linkedin className="w-5 h-5 text-pink-400" />
                  <span className="text-2xl font-bold text-pink-300">6k+</span>
                </div>
                <p className="text-gray-400 font-inter text-sm">LinkedIn Connections</p>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-lg p-4 border border-purple-500/30 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <Github className="w-5 h-5 text-purple-400" />
                  <span className="text-2xl font-bold text-purple-300">72+</span>
                </div>
                <p className="text-gray-400 font-inter text-sm">GitHub Repositories</p>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-lg p-4 border border-green-500/30 hover:border-green-400/60 hover:shadow-lg hover:shadow-green-500/20 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <Code2 className="w-5 h-5 text-green-400" />
                  <span className="text-2xl font-bold text-green-300">300+</span>
                </div>
                <p className="text-gray-400 font-inter text-sm">LeetCode Questions</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Left: About Me */}
          <div className="md:col-span-2">
            {/* About Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/about" className="block h-full">
                <Card className="h-full md:h-[210px] flex flex-col hover:shadow-xl hover:shadow-accent/20 transition-all cursor-pointer group border border-accent/20 hover:border-accent/50 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                        About Me
                      </h2>
                      <p className="text-gray-400 text-base leading-relaxed">
                        Passionate full-stack developer specializing in scalable web applications. I transform ideas into production-ready solutions, combining modern technologies with clean code principles and exceptional user experiences.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                  <button className="mt-auto self-start px-3 py-1.5 bg-accent/20 hover:bg-accent/40 border border-accent/50 rounded text-accent text-xs font-semibold inline-flex items-center gap-1 transition-all">
                    Read More <ArrowRight className="w-3 h-3" />
                  </button>
                </Card>
              </Link>
            </motion.div>
          </div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Link href="/skills" className="block h-full">
              <Card className="h-full md:h-[210px] overflow-hidden flex flex-col hover:shadow-xl hover:shadow-emerald-500/20 transition-all cursor-pointer group border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-gradient-to-br hover:from-emerald-500/5 hover:to-transparent p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                    Skills
                  </h3>
                  <ArrowRight className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <p className="text-gray-400 text-sm mb-3">Technologies and tools I work with</p>
                <motion.div
                  className="overflow-hidden pb-2 mb-2"
                >
                  <motion.div
                    className="flex gap-4"
                    animate={{ x: [0, -1620] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  >
                    {[0, 1].map((setIdx) => (
                      <div key={setIdx} className="flex gap-4 min-w-max">
                        {homeSkillIcons.map((skill) => {
                          const Icon = skill.icon
                          return (
                            <div key={`${skill.name}-${setIdx}`} className="flex flex-col items-center flex-shrink-0 w-16">
                              <div className="relative group/skill">
                                <div className="h-12 w-12 flex items-center justify-center cursor-help mb-1.5">
                                  <Icon
                                    className="w-7 h-7 drop-shadow-[0_0_10px_rgba(255,255,255,0.06)]"
                                    style={{ color: skill.color }}
                                  />
                                </div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/skill:opacity-100 transition-opacity whitespace-nowrap border border-white/10 z-10">
                                  {skill.name}
                                </div>
                              </div>
                              <p className="text-gray-200/90 text-xs font-semibold text-center">{skill.name}</p>
                            </div>
                          )
                        })}
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
                <button className="mt-auto self-start px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/35 border border-emerald-500/40 hover:border-emerald-400/70 rounded text-emerald-300 text-xs font-semibold inline-flex items-center gap-1 transition-all">
                  View Skills <ArrowRight className="w-3 h-3" />
                </button>
              </Card>
            </Link>
          </motion.div>

          {/* Projects Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <Link href="/projects">
              <Card className="hover:shadow-xl hover:shadow-blue-500/20 transition-all cursor-pointer group border border-blue-500/30 hover:border-blue-400/60 bg-gradient-to-br from-blue-500/15 to-blue-600/5 p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-blue-300 group-hover:translate-x-1 transition-transform">
                    Projects
                  </h3>
                  <ArrowRight className="w-5 h-5 text-blue-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mb-3 w-full">
                  <div className="flex gap-3 w-max">
                    {scrollingProjects.slice(0, Math.floor(scrollingProjects.length / 2)).map((project, index) => (
                      <div
                        key={`${project.id}-manual-${index}`}
                        className="min-w-[256px] w-[256px] bg-gradient-to-br from-blue-600/30 to-blue-700/20 rounded-lg border border-blue-500/30 overflow-hidden shrink-0"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-24 object-cover"
                          loading="lazy"
                        />
                        <div className="p-2.5">
                          <h4 className="text-blue-100 font-semibold text-sm mb-1 line-clamp-1">{project.title}</h4>
                          <p className="text-blue-200/80 text-xs leading-relaxed line-clamp-1">{project.short}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/40 border border-blue-500/50 rounded text-blue-300 text-xs font-semibold flex items-center gap-1 transition-all">
                  View Projects <ArrowRight className="w-3 h-3" />
                </button>
              </Card>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Row - Certificates & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-stretch">

          {/* Certificates Card */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/certificates" className="h-full block">
              <Card className="h-full flex flex-col justify-between hover:shadow-xl hover:shadow-purple-500/20 transition-all cursor-pointer group border border-purple-500/30 hover:border-purple-400/60 bg-gradient-to-br from-purple-500/15 to-purple-600/5 p-6">

                {/* Top */}
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-purple-300 group-hover:translate-x-1 transition-transform">
                      Certificates
                    </h3>
                    <ArrowRight className="w-5 h-5 text-purple-300 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>

                  {/* Scrolling Images */}
                  <div className="overflow-hidden mb-3">
                    <motion.div
                      className="flex w-max gap-2"
                      animate={{ x: ['-50%', '0%'] }}
                      transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                    >
                      {scrollingCertificates.map((certificate, index) => (
                        <div
                          key={`${certificate.id}-${index}`}
                          className="min-w-[120px] h-14 rounded-lg border border-purple-500/30 overflow-hidden bg-purple-600/20"
                        >
                          <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Bottom Button */}
                <button className="mt-auto px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/50 rounded text-purple-300 text-xs font-semibold flex items-center gap-1 transition-all w-fit">
                  View Certificates <Award className="w-3 h-3" />
                </button>
              </Card>
            </Link>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="h-full block">
              <Card className="h-full flex flex-col justify-between hover:shadow-xl hover:shadow-pink-500/20 transition-all cursor-pointer group border border-pink-500/30 hover:border-pink-400/60 bg-gradient-to-br from-pink-500/15 to-pink-600/5 p-6">

                {/* Top */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-pink-300 group-hover:translate-x-1 transition-transform">
                      Contact
                    </h3>
                    <ArrowRight className="w-5 h-5 text-pink-300 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>

                  <p className="text-gray-400 text-base mb-4">
                    Turning ideas into scalable digital solutions. Let’s connect and create something great.
                  </p>
                </div>

                {/* Bottom Button */}
                <button className="mt-auto px-3 py-1.5 bg-pink-500/20 hover:bg-pink-500/40 border border-pink-500/50 rounded text-pink-300 text-xs font-semibold flex items-center gap-1 transition-all w-fit">
                  Get In Touch <Send className="w-3 h-3" />
                </button>
              </Card>
            </Link>
          </motion.div>

        </div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-5 md:p-6 border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left flex-1">
            <h2 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2">
              Ready to create something amazing?
            </h2>
            <p className="text-gray-400 text-sm font-inter max-w-xl">
              I specialize in scalable, high-performance web applications. Let's collaborate and bring your vision to life!
            </p>
          </div>
          <div className="w-full md:w-auto shrink-0 flex items-center justify-center">
            <a href="/contact" className="w-full md:w-auto">
              <Button variant="primary" size="sm" className="w-full md:w-auto text-sm font-semibold py-2.5 px-6">
                <Mail className="w-4 h-4 mr-2" />
                Let's Connect
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


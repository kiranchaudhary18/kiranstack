"use client";
import { motion } from 'framer-motion'
import SectionTitle from '../../components/SectionTitle'
import Card from '../../components/Card'
import { Terminal, ChevronRight, Github, Twitter, Linkedin, Youtube, HelpCircle, Code2, Award } from 'lucide-react'

export default function About() {
  const mainContent = 'md:pl-[328px] md:pr-[64px]'

  const connectLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/kiranchaudhary18' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/dekaliya_kiran' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/chaudharykiran16' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@CodeZen-22' },
  ]

  return (
    <main className={`w-full ${mainContent} min-h-screen pt-4 sm:pt-6 md:pt-8 pb-16 px-4 sm:px-6 transition-all duration-300`}>
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mt-8 md:mt-16"
      >
        <SectionTitle
          title="About Me"
          subtitle="Learn more about my journey and expertise"
        />

        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-10 flex flex-wrap gap-2 mt-12">
          I'M A <span className="text-accent underline decoration-accent/30 underline-offset-8">FULL STACK</span> DEVELOPER
        </h2>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-col-reverse gap-12 lg:gap-8 mb-20 items-stretch">

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-gray-300 font-inter text-base md:text-lg leading-relaxed">
            <p>
              My journey into technology began with curiosity, not just chasing a title. I was driven to understand how modern systems work at a deeper level, which gradually turned into a passion for software engineering and building scalable, user-focused digital solutions that solve real-world problems.
            </p>
            <p>
              Based in India, I specialize in end-to-end engineering of modern web applications — from crafting intuitive interfaces with <strong className="text-white font-semibold">React and Next.js</strong> to developing secure, high-performance backend systems using <strong className="text-white font-semibold">Node.js and MongoDB</strong>, ensuring reliability and scalability at every layer.
            </p>
            <p>
              My approach focuses on clean code, performance optimization, and thoughtful system design. I aim to deliver seamless user experiences while maintaining strong engineering standards, building impactful and scalable solutions with precision and a problem-solving mindset.
            </p>
          </div>

          {/* Image/Profile Card */}
          <div className="lg:col-span-5 relative group">
            <div className="w-full h-full min-h-[400px] relative rounded-3xl border border-white/10 bg-dark-850/80 backdrop-blur-sm overflow-hidden flex items-end justify-center p-4">
              <div className="w-full h-full absolute inset-0 overflow-hidden rounded-3xl">
                <img
                  src="https://res.cloudinary.com/dnbayngfx/image/upload/v1774849233/Gemini_Generated_Image_2380m42380m42380_gb2nnh.png"
                  alt="Kiran Chaudhary"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-40 group-hover:opacity-50 transition-opacity duration-500 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent"></div>
                <div
                  className="absolute inset-0 bg-repeat opacity-[0.02]"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(45deg, #D4AF37, #D4AF37 1px, transparent 1px, transparent 30px),
                      repeating-linear-gradient(-45deg, #D4AF37, #D4AF37 1px, transparent 1px, transparent 30px)
                    `,
                    backgroundSize: '40px 40px'
                  }}
                ></div>
              </div>

              {/* Floating Badge */}
              <div className="relative z-10 w-full">
                <div className="w-full bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-2xl">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent shrink-0 border border-accent/30">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-poppins font-bold text-lg">Full Stack Developer</h3>
                    <p className="text-gray-300 font-inter text-sm">React • Node.js • JavaScript</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Expertise */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="text-accent" size={28} />
            <h3 className="font-poppins font-bold text-2xl text-accent">Technical Expertise</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex items-start gap-2">
              <ChevronRight className="text-accent shrink-0 mt-1" size={18} />
              <p className="font-inter">
                <span className="text-white font-bold">Frontend:</span> <span className="text-gray-400">React.js, Next.js, TypeScript, Tailwind CSS</span>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="text-accent shrink-0 mt-1" size={18} />
              <p className="font-inter">
                <span className="text-white font-bold">Backend:</span> <span className="text-gray-400">Node.js, Express, MongoDB, PostgreSQL</span>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="text-accent shrink-0 mt-1" size={18} />
              <p className="font-inter">
                <span className="text-white font-bold">DevOps:</span> <span className="text-gray-400">Docker, AWS, CI/CD, Git</span>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="text-accent shrink-0 mt-1" size={18} />
              <p className="font-inter">
                <span className="text-white font-bold">Tools:</span> <span className="text-gray-400">Figma, Postman, VS Code</span>
              </p>
            </div>
          </div>
        </motion.section>

        {/* LeetCode & Connect Box */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-dark-800 rounded-3xl p-8 border border-white/10 relative overflow-hidden backdrop-blur-md group">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-dark-900 to-dark-900 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div
              className="absolute inset-0 bg-repeat opacity-[0.03]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(45deg, #D4AF37, #D4AF37 1px, transparent 1px, transparent 30px),
                  repeating-linear-gradient(-45deg, #D4AF37, #D4AF37 1px, transparent 1px, transparent 30px)
                `,
                backgroundSize: '40px 40px'
              }}
            ></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-dark-900/70 border-2 border-accent/30 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                    <Code2 className="text-accent" size={32} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-3xl text-white mb-2">LeetCode <span className="text-accent">Profile</span></h3>
                    <p className="text-gray-400 font-inter text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span> Global Rank: <strong className="text-accent">393,442</strong>
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/10 text-accent text-sm font-bold w-max backdrop-blur-sm">
                  <Award size={16} /> Active Solver
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                <Card hover={true} className="bg-dark-900/70 border border-white/5 backdrop-blur-sm">
                  <div className="p-2">
                    <p className="text-accent text-xs font-bold tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full border border-accent"></span> TOTAL
                    </p>
                    <p className="text-white text-4xl font-bold font-poppins mb-1">330</p>
                    <p className="text-gray-500 text-xs">Problems</p>
                  </div>
                </Card>
                <Card hover={true} className="bg-dark-900/70 border border-white/5 backdrop-blur-sm">
                  <div className="p-2">
                    <p className="text-green-500 text-xs font-bold tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span> EASY
                    </p>
                    <p className="text-white text-4xl font-bold font-poppins mb-1">148</p>
                    <p className="text-gray-500 text-xs">Solved</p>
                  </div>
                </Card>
                <Card hover={true} className="bg-dark-900/70 border border-white/5 backdrop-blur-sm">
                  <div className="p-2">
                    <p className="text-yellow-500 text-xs font-bold tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-500"></span> MEDIUM
                    </p>
                    <p className="text-white text-4xl font-bold font-poppins mb-1">164</p>
                    <p className="text-gray-500 text-xs">Solved</p>
                  </div>
                </Card>
                <Card hover={true} className="bg-dark-900/70 border border-white/5 backdrop-blur-sm">
                  <div className="p-2">
                    <p className="text-red-500 text-xs font-bold tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span> HARD
                    </p>
                    <p className="text-white text-4xl font-bold font-poppins mb-1">18</p>
                    <p className="text-gray-500 text-xs">Solved</p>
                  </div>
                </Card>
              </div>

              {/* Connect Section */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="font-poppins font-bold text-white mb-6">Connect With Me</h4>
                <div className="flex flex-wrap gap-4">
                  {connectLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-white/10 bg-dark-800/80 text-gray-300 hover:text-white hover:bg-dark-700 hover:border-white/20 transition-all font-inter text-sm backdrop-blur-sm"
                      >
                        <Icon size={18} />
                        {link.name}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </main>
  )
}


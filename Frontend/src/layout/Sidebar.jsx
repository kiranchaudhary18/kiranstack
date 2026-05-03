"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, Code, Award, BookOpen, Mail, Zap, Github, Youtube, Menu, Code2 } from 'lucide-react'
import { Linkedin, Github as GithubIcon } from 'lucide-react'
import { motion } from 'framer-motion'

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function Sidebar({ open, setOpen, collapsed, setCollapsed }) {
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Skills', path: '/skills', icon: Zap },
    { name: 'Projects', path: '/projects', icon: Code },
    { name: 'Education', path: '/education', icon: BookOpen },
    { name: 'GitHub', path: '/github', icon: Github },
    { name: 'Achievements', path: '/certificates', icon: Award },
    { name: 'Contact', path: '/contact', icon: Mail },
  ]

  const socialLinks = [
    { icon: GithubIcon, link: 'https://github.com/kiranchaudhary18' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/chaudharykiran16/' },
    { icon: XIcon, link: 'https://x.com/dekaliya_kiran' },
    { icon: Code2, link: 'https://leetcode.com/u/KiranChaudhary/' },
    { icon: Youtube, link: 'https://www.youtube.com/@CodeZen-22' },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 md:hidden z-40"
        />
      )}

      {/* Desktop Sidebar */}
      <motion.div
        initial={false}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ width: '240px', minWidth: '240px', maxWidth: '240px', flexShrink: 0 }}
        className="hidden md:flex fixed left-4 top-4 bottom-4 bg-gradient-to-b from-[#0A192F]/80 to-[#0A192F]/95 backdrop-blur-[20px] rounded-2xl flex-col py-6 px-4 z-40 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-accent/30"
      >
        {/* Menu Title */}
        <div className="flex items-center space-x-3 mb-8 px-2 flex-shrink-0">
          <Menu className="w-6 h-6 text-accent" />
          <h3 className="text-white font-poppins font-bold text-2xl">Menu</h3>
        </div>

        {/* Scrollable Container (Centered) */}
        <div className="flex-1 flex flex-col justify-center overflow-y-auto custom-scrollbar pr-2 w-full">
          {/* Navigation Items */}
          <nav className="flex flex-col space-y-1 w-full">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path)

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`flex items-center px-4 py-3 rounded-xl transition-all ${active
                        ? 'bg-accent/10 text-accent'
                        : 'text-gray-400 hover:text-accent hover:bg-accent/5'
                      }`}
                  >
                    <Icon className={`w-5 h-5 mr-3 transition-colors ${active ? 'text-accent' : 'text-gray-400 group-hover:text-accent'}`} />
                    <span className="font-inter text-[15px] font-medium">
                      {item.name}
                    </span>
                    {active && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                    )}
                  </motion.div>
                </Link>
              )
            })}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center pt-6 mt-6 border-t border-accent/10 w-full">
            <div className="flex flex-wrap justify-center gap-4 max-w-[170px]">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent/5 hover:bg-accent/20 border border-accent/10 flex items-center justify-center text-gray-400 hover:text-accent transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: open ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed left-0 top-0 bottom-0 w-64 bg-gradient-to-b from-[#0A192F]/90 to-[#0A192F] backdrop-blur-[20px] rounded-r-2xl flex flex-col py-6 px-4 md:hidden z-40 shadow-[0_8px_32px_rgba(0,0,0,0.7)] border-r border-accent/30"
      >
        {/* Menu Title */}
        <div className="flex items-center space-x-3 mb-8 px-2 flex-shrink-0">
          <Menu className="w-6 h-6 text-accent" />
          <h3 className="text-white font-poppins font-bold text-2xl">Menu</h3>
        </div>

        {/* Scrollable Container (Centered) */}
        <div className="flex-1 flex flex-col justify-center overflow-y-auto custom-scrollbar pr-2 w-full">
          {/* Navigation Items */}
          <nav className="flex flex-col space-y-1 w-full">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path)

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl transition-all group ${active
                      ? 'bg-accent/10 text-accent'
                      : 'text-gray-400 hover:text-accent hover:bg-accent/5'
                    }`}
                >
                  <Icon className={`w-5 h-5 mr-3 transition-colors ${active ? 'text-accent' : 'text-gray-400 group-hover:text-accent'}`} />
                  <span className="font-inter text-[15px] font-medium">{item.name}</span>
                  {active && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center pt-6 mt-6 border-t border-accent/10 w-full">
            <div className="flex flex-wrap justify-center gap-4 max-w-[170px]">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="w-10 h-10 rounded-full bg-accent/5 hover:bg-accent/20 border border-accent/10 flex items-center justify-center text-gray-400 hover:text-accent transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

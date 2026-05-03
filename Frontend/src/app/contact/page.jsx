"use client";
import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { Mail, Phone, MapPin, Github, Linkedin, Send, Youtube, Code2 } from 'lucide-react'

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', subject: '', message: '' })
        }, 4000)
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const mainContent = 'md:pl-[352px] md:pr-[64px]'

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'kiran.chaudhary.cg@gmail.com', link: 'mailto:kiran.chaudhary.cg@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 91060 03382', link: 'tel:+919106003382' },
    { icon: MapPin, label: 'Location', value: 'Ahmedabad, Gujarat', link: '#' },
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/kiranchaudhary18' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/chaudharykiran16/' },
    { icon: XIcon, label: 'Twitter', link: 'https://x.com/dekaliya_kiran' },
    { icon: Code2, label: 'LeetCode', link: 'https://leetcode.com/u/KiranChaudhary/' },
    { icon: Youtube, label: 'YouTube', link: 'https://www.youtube.com/@CodeZen-22' },
  ]

  return (
    <main className={`flex-1 min-h-screen pt-8 pb-16 px-4 ${mainContent} transition-all duration-300`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full xl:pr-10"
      >
        <SectionTitle
          title="Get In Touch"
          subtitle="Whether you have an exciting project vision, need technical consultation, or just want to drop a quick hello—I'm ready to help you turn your ideas into functional reality."
        />
      </motion.div>

      {/* Content Grid */}
      <div className="w-full mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:pr-10">

        {/* Contact Info */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-1 space-y-6"
        >
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <motion.a key={idx} variants={item} href={info.link} className="block">
                <Card className="!py-3 !px-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 font-inter text-[14px] mb-1">{info.label}</p>
                      <p className="text-accent font-poppins font-bold text-[13px] md:text-[14px] tracking-tight leading-snug break-all border-l-2 border-accent/20 pl-2">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.a>
            )
          })}

          {/* Social Links */}
          <motion.div variants={item} className="pt-4 border-t border-accent/20">
            <p className="text-gray-400 font-inter text-sm mb-4">Follow me on:</p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2 max-w-[600px] w-full"
        >
          <Card className="h-full">
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-xl text-green-400 mb-2">Message Sent!</h3>
                <p className="text-gray-400 font-inter">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-300 font-inter font-medium text-sm mb-2">Your Name</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-accent/30 text-white font-inter placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 font-inter font-medium text-sm mb-2">Your Email</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-accent/30 text-white font-inter placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-300 font-inter font-medium text-sm mb-2">Subject</label>
                  <input
                    type="text" name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-accent/30 text-white font-inter placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder="Project Discussion"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-300 font-inter font-medium text-sm mb-2">Message</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} required rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-accent/30 text-white font-inter placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-inter text-sm">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </div>
                )}

                {/* Submit */}
                <Button variant="primary" size="lg" className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </main>
  )
}

"use client";
import { motion } from 'framer-motion'

export default function SectionTitle({ 
  title, 
  subtitle, 
  alignment = 'left' 
}) {
  const alignmentClass = alignment === 'center' ? 'text-center' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={alignmentClass}
    >
      <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-2">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 font-inter text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="w-12 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mt-4" />
    </motion.div>
  )
}


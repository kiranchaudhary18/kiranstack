"use client";
import { motion } from 'framer-motion'

export default function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-accent/10 text-accent border border-accent/30',
    secondary: 'bg-secondary/10 text-secondary border border-secondary/30',
    success: 'bg-green-500/10 text-green-400 border border-green-500/30',
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`inline-block px-3 py-1 rounded-full text-xs font-inter font-medium transition-all ${variants[variant]}`}
    >
      {children}
    </motion.span>
  )
}


"use client";
import { motion } from 'framer-motion'

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      className={`glass rounded-xl p-6 ${hover ? 'hover:shadow-glow cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}


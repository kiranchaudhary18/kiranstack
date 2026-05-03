"use client";
import { motion } from 'framer-motion'

export default function SkillBar({ name, percentage, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5 text-accent" />}
          <span className="font-inter font-medium text-gray-300">{name}</span>
        </div>
        <span className="text-accent font-poppins font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden border border-accent/20">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent to-secondary h-full rounded-full shadow-glow"
        />
      </div>
    </motion.div>
  )
}


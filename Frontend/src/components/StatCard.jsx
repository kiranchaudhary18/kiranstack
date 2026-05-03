"use client";
import { motion } from 'framer-motion'

export default function StatCard({ 
  label, 
  value, 
  icon: Icon, 
  trend = null,
  color = 'accent' 
}) {
  const colorClass = color === 'accent' ? 'text-accent' : color === 'secondary' ? 'text-secondary' : 'text-green-400'

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass rounded-xl p-6 text-center group"
    >
      <div className={`w-12 h-12 ${colorClass} mx-auto mb-4 group-hover:scale-110 transition-transform`}>
        {Icon && <Icon className="w-full h-full" />}
      </div>
      <h3 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-2">
        {value}
      </h3>
      <p className="text-gray-400 font-inter text-sm">{label}</p>
      {trend && (
        <p className={`text-xs mt-2 font-inter ${trend.positive ? 'text-green-400' : 'text-red-400'}`}>
          {trend.positive ? '↑' : '↓'} {trend.value}
        </p>
      )}
    </motion.div>
  )
}


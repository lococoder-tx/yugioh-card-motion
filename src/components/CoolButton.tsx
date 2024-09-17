import React from 'react'
import { motion } from 'framer-motion'

interface CoolButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const CoolButton: React.FC<CoolButtonProps> = ({ onClick, children }) => (
  <motion.button
    onClick={onClick}
    className="px-4 py-2 m-2 bg-white text-gray-800 rounded-md shadow-md font-semibold transition-colors duration-200 ease-in-out hover:bg-gray-100"
    whileHover={{ scale: 1.25 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
)

export default CoolButton

import { motion } from 'framer-motion'

interface CardStatsProps {
  atk: number
  def: number
  level: number
  attribute: string
  description: string
}

export function CardStats({
  atk,
  def,
  level,
  attribute,
  description,
}: CardStatsProps) {
  const maxStat = Math.max(atk, def, 3000) // Assuming 3000 as max for scale

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-4 text-white">Card Stats</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="w-20 text-gray-200">ATK:</span>
          <motion.div
            className="h-4 bg-red-500 rounded"
            initial={{ width: 0 }}
            animate={{ width: `${(atk / maxStat) * 100}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <span className="ml-2 text-white">{atk}</span>
        </div>
        <div className="flex items-center">
          <span className="w-20 text-gray-200">DEF:</span>
          <motion.div
            className="h-4 bg-blue-500 rounded"
            initial={{ width: 0 }}
            animate={{ width: `${(def / maxStat) * 100}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <span className="ml-2 text-white">{def}</span>
        </div>
        <div className="flex items-center">
          <span className="w-20 text-gray-200">Level:</span>
          <div className="flex">
            {[...Array(level)].map((_, i) => (
              <motion.svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-yellow-500 fill-current"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </motion.svg>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <span className="w-20 text-gray-200">Attribute:</span>
          <span className="text-white font-semibold uppercase">
            {attribute}
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-200 w-24">Description:</span>
          <span className="text-white font-semibold">{description}</span>
        </div>
      </div>
    </div>
  )
}

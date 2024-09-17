import { motion } from 'framer-motion'
import Card from './Card'

export default function TiersCardRow() {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 40, damping: 15 }}
    >
      <div className="relative flex space-x-6">
        <Card
          title={'Basic Tier'}
          features={['Cool Feature 1', 'Cool Feature 2']}
          price={199}
          variant={'1'}
        />
        <Card
          title={'Pro Tier'}
          features={['Cool Feature 1', 'Cool Feature 2', 'Cool Feature 3']}
          price={299}
          variant={'2'}
        />
        <Card
          title={'Premium Tier'}
          features={[
            'Cool Feature 1',
            'Cool Feature 2',
            'Cool Feature 3',
            'Cool Feature 4',
          ]}
          price={399}
          variant={'3'}
        />
      </div>
    </motion.div>
  )
}

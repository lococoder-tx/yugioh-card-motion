import { useState } from 'react'
import PlayingCardRow from './components/PlayingCardRow'
import Container from './layout/Container'
import CoolButton from './components/CoolButton'
import { AnimatePresence, motion } from 'framer-motion'
import TiersCardRow from './components/TiersCardRow'

function App() {
  const [example, setExample] = useState('')

  return (
    <Container>
      <motion.div
        className="flex flex-col gap-y-6"
        animate={{ height: example ? 'auto' : 'auto' }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex self-center gap-4">
          <CoolButton onClick={() => setExample('yugioh')}>
            Cool Example
          </CoolButton>
          <CoolButton onClick={() => setExample('tiers')}>
            Practical Example
          </CoolButton>
        </div>

        <AnimatePresence>
          {example === 'yugioh' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <PlayingCardRow />
            </motion.div>
          )}
          {example === 'tiers' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <TiersCardRow />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  )
}

export default App

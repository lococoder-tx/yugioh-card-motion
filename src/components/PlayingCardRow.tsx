import { useRef, useState } from 'react'
import { PlayingCard, PlayingCardRef } from './PlayingCard'
import { AnimatePresence, motion } from 'framer-motion'
import { CardStats } from './CardStats'

interface CardStatsProps {
  title: string
  level: number
  description: string
  atk: number
  def: number
  attribute: string
}

interface SelectedCard extends CardStatsProps {
  variant: string
  image: string
}

const CARDS: SelectedCard[] = [
  {
    title: 'Blue Eyes White Dragon',
    level: 8,
    atk: 3000,
    def: 2500,
    attribute: 'light',
    description: 'Super angry dragon with pretty blue eyes',
    variant: '1',
    image: '/bewd.png',
  },
  {
    title: 'Dark Magician',
    level: 8,
    atk: 2500,
    def: 2100,
    attribute: 'dark',
    description: "He'll make your life disappear! Don't try this one at home.",
    variant: '2',
    image: '/darkmagician.jpg',
  },
  {
    title: 'Exodia',
    level: 12,
    atk: 9999,
    def: 9999,
    attribute: 'dark',
    description: 'Basically God',
    variant: '3',
    image: '/exodia.jpg',
  },
]

export default function PlayingCardRow() {
  const [selectedCard, setSelectedCard] = useState<{
    card: SelectedCard
    index: number
  } | null>(null)
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 })
  const cardDivRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardRefs = useRef<(PlayingCardRef | null)[]>([])

  const handleCardClick = (card: SelectedCard, index: number) => {
    const cardDivElement = cardDivRefs.current[index]
    if (cardDivElement) {
      const rect = cardDivElement.getBoundingClientRect()
      setCardPosition({ x: rect.left, y: rect.top })
    }
    setSelectedCard({ card, index })
  }

  const closeModal = () => {
    if (selectedCard) {
      cardRefs.current[selectedCard?.index]!.handleModalClose()
    }
    setSelectedCard(null)
  }

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 40, damping: 15 }}
    >
      <div className="relative flex">
        <div
          ref={(el) => (cardDivRefs.current[0] = el)}
          className="relative hover:mr-20 transition-all duration-500"
        >
          <PlayingCard
            ref={(el) => (cardRefs.current[0] = el)}
            onClick={() => handleCardClick(CARDS[0], 0)}
            variant={CARDS[0].variant}
            image={CARDS[0].image}
          />
        </div>
        {/* Here we would loop if we had more than 3 cards */}
        <div
          ref={(el) => (cardDivRefs.current[1] = el)}
          className="relative -ml-20 hover:mr-20 transition-all duration-500"
        >
          <PlayingCard
            ref={(el) => (cardRefs.current[1] = el)}
            onClick={() => handleCardClick(CARDS[1], 1)}
            variant={CARDS[1].variant}
            image={CARDS[1].image}
          />
        </div>
        <div
          ref={(el) => (cardDivRefs.current[2] = el)}
          className="relative -ml-20 hover:ml-0 transition-all duration-500"
        >
          <PlayingCard
            ref={(el) => (cardRefs.current[2] = el)}
            onClick={() => handleCardClick(CARDS[2], 2)}
            variant={CARDS[2].variant}
            image={CARDS[2].image}
          />
        </div>

        <AnimatePresence>
          {selectedCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
              onClick={closeModal}
            >
              <motion.div
                initial={{
                  scale: 1,
                  x: cardPosition.x - 400,
                  y: cardPosition.y - 200,
                }}
                animate={{
                  scale: 1.3,
                  x: '-65%',
                }}
                exit={{
                  scale: 1,
                  x: cardPosition.x - 400,
                  y: cardPosition.y - 200,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute left-1/4 top-[20%] -translate-x-1/2 -translate-y-1/2"
                onClick={(e) => e.stopPropagation()}
              >
                <PlayingCard
                  frontOnly={true}
                  variant={selectedCard.card.variant}
                  image={selectedCard.card.image}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: 0.2 }}
                className="absolute right-1/4 top-1/4 -translate-y-1/2 w-1/3 space-y-6"
              >
                <h2 className="text-3xl font-bold mb-4 text-white">
                  {selectedCard.card.title}
                </h2>
                <CardStats {...selectedCard.card} />
              </motion.div>

              <button
                className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                onClick={closeModal}
              >
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

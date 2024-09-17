import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

interface Modal {
  onClose: () => void
  isOpen: boolean
  selectedCard: string
}

export default function Modal({ onClose, selectedCard, isOpen }: Modal) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-full h-full flex"
          >
            {/* Left side - Image */}
            <div className="w-1/3 h-full relative">
              <img
                src="/placeholder.svg?height=1080&width=720"
                alt="Product Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Vertical Divider */}
            <div className="w-px bg-[#4b5563] h-full"></div>

            {/* Right side - Text Description */}
            <div className="w-2/3 h-full p-8 overflow-y-auto bg-[rgba(17,24,39,0.8)] backdrop-blur-md">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Product Title
              </h2>
              <p className="text-[#9ca3af] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
                porttitor. Ut in nulla enim. Phasellus molestie magna non est
                bibendum non venenatis nisl tempor. Suspendisse dictum feugiat
                nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id
                metus massa, ut blandit odio. Proin quis tortor orci. Etiam at
                risus et justo dignissim congue. Donec congue lacinia dui, a
                porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.
                Quisque eget odio ac lectus vestibulum faucibus eget in metus.
                In pellentesque faucibus vestibulum. Nulla at nulla justo, eget
                luctus tortor.
              </p>
              <p className="text-[#9ca3af]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 rounded-full p-2 bg-white text-black hover:bg-[#e5e7eb] transition-colors"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

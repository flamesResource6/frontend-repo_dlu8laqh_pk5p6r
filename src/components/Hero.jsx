import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero({ name = 'Your Name', tagline = 'Teacher • Programmer • Writer • Entrepreneur' }) {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            >
              {name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
              className="mt-4 text-lg sm:text-2xl text-blue-100/90"
            >
              {tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {['Teacher', 'Programmer', 'Writer', 'Entrepreneur'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.08, type: 'spring', damping: 20, stiffness: 200 }}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 backdrop-blur-md text-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

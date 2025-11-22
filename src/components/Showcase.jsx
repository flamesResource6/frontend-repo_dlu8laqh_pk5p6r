import { motion } from 'framer-motion'

function Pill({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, type: 'spring', damping: 20, stiffness: 200 }}
      className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 backdrop-blur-md text-sm"
    >
      {children}
    </motion.div>
  )
}

function Showcase({ roles = [], skills = [], hobbies = [] }) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white text-2xl font-semibold">What I do</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {roles.map((r, i) => (
                <Pill key={r} delay={i * 0.06}>{r}</Pill>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-2xl font-semibold">What I know</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <Pill key={s} delay={i * 0.06}>{s}</Pill>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-2xl font-semibold">What I enjoy</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {hobbies.map((h, i) => (
                <Pill key={h} delay={i * 0.06}>{h}</Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase

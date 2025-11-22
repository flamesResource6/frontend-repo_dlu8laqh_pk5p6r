import { motion } from 'framer-motion'

function About({ bio, avatar_url }) {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
            <p className="mt-4 text-blue-100/90 leading-relaxed text-lg">
              {bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {avatar_url ? (
                <img src={avatar_url} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 flex items-center justify-center text-white/90">
                  <span className="text-sm px-4 text-center">Upload your image below to personalize</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

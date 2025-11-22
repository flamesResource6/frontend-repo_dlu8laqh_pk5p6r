import { useState } from 'react'
import { motion } from 'framer-motion'

const backendBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProfileForm({ onSaved }) {
  const [name, setName] = useState('Your Name')
  const [tagline, setTagline] = useState('Teacher • Programmer • Writer • Entrepreneur')
  const [bio, setBio] = useState('I love building things, sharing knowledge, and exploring ideas. This is my corner of the internet where I collect what I do and what I know.')
  const [avatar_url, setAvatarUrl] = useState('')

  const defaultRoles = ['Teacher', 'Programmer', 'Writer', 'Entrepreneur']
  const defaultSkills = ['JavaScript', 'Python', 'React', 'FastAPI', 'Node.js', 'Writing', 'Teaching']
  const defaultHobbies = [
    'Running',
    'Working out',
    'Creating fictional worlds',
    'Travelling and sight seeing',
    'Walking around at night',
  ]
  const [roles, setRoles] = useState(defaultRoles)
  const [skills, setSkills] = useState(defaultSkills)
  const [hobbies, setHobbies] = useState(defaultHobbies)

  const addItem = (list, setList, value) => {
    if (!value) return
    if (list.includes(value)) return
    setList([...list, value])
  }

  const removeItem = (list, setList, value) => {
    setList(list.filter((i) => i !== value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = { name, tagline, bio, roles, skills, hobbies, avatar_url: avatar_url || null }
    const res = await fetch(`${backendBase}/api/profile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      onSaved?.(payload)
    }
  }

  return (
    <section className="py-14 bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-6">
        <h3 className="text-white text-2xl font-semibold">Personalize</h3>
        <p className="text-blue-200/80 mt-1">Update your info and paste a direct image URL to set your portrait.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-white/50 outline-none" />
              <input value={tagline} onChange={(e)=>setTagline(e.target.value)} placeholder="Tagline" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-white/50 outline-none" />
            </div>
            <textarea value={bio} onChange={(e)=>setBio(e.target.value)} placeholder="About you" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-white/50 outline-none" />
            <input value={avatar_url} onChange={(e)=>setAvatarUrl(e.target.value)} placeholder="Direct image URL (https://...)" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-white/50 outline-none" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <TagEditor title="Roles" list={roles} setList={setRoles} />
              <TagEditor title="Skills" list={skills} setList={setSkills} />
              <TagEditor title="Hobbies" list={hobbies} setList={setHobbies} />
            </div>
          </div>
          <div>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors">Save Profile</button>
            <p className="text-blue-200/70 text-sm mt-3">Tip: Use an image hosting service that gives you a direct link (ends with .jpg, .png, etc.).</p>
          </div>
        </form>
      </div>
    </section>
  )
}

function TagEditor({ title, list, setList }) {
  const [value, setValue] = useState('')
  return (
    <div>
      <h4 className="text-white font-medium">{title}</h4>
      <div className="mt-2 flex gap-2">
        <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder={`Add ${title.toLowerCase().slice(0,-1)}`} className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-white/50 outline-none" />
        <button type="button" onClick={()=>{ if(value.trim()){ setList([...list, value.trim()]); setValue('') } }} className="px-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">Add</button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {list.map((item)=> (
          <motion.button key={item} type="button" onClick={()=>setList(list.filter(i=>i!==item))} whileTap={{ scale: 0.96 }} className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 backdrop-blur-md text-sm">
            {item}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default ProfileForm

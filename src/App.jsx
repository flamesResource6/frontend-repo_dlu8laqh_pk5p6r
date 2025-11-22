import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Showcase from './components/Showcase'
import ProfileForm from './components/ProfileForm'

const backendBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [profile, setProfile] = useState(null)

  const loadProfile = async () => {
    try {
      const res = await fetch(`${backendBase}/api/profile`)
      const data = await res.json()
      setProfile(data)
    } catch (e) {
      setProfile({
        name: 'Your Name',
        tagline: 'Teacher • Programmer • Writer • Entrepreneur',
        bio: 'I love building things, sharing knowledge, and exploring ideas. This is my corner of the internet where I collect what I do and what I know.',
        roles: ['Teacher','Programmer','Writer','Entrepreneur'],
        skills: ['JavaScript','Python','React','FastAPI','Node.js','Writing','Teaching'],
        hobbies: ['Running','Working out','Creating fictional worlds','Travelling and sight seeing','Walking around at night'],
        avatar_url: null,
      })
    }
  }

  useEffect(()=>{ loadProfile() }, [])

  return (
    <div className="min-h-screen bg-slate-900">
      <Hero name={profile?.name} tagline={profile?.tagline} />
      <About bio={profile?.bio} avatar_url={profile?.avatar_url} />
      <Showcase roles={profile?.roles||[]} skills={profile?.skills||[]} hobbies={profile?.hobbies||[]} />
      <ProfileForm onSaved={(data)=>{ setProfile(data) }} />
      <footer className="py-10 text-center text-blue-200/70 text-sm bg-slate-900">
        Built with love and a touch of 3D. Update your details above to make it yours.
      </footer>
    </div>
  )
}

export default App

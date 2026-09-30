import Nav from './components/Nav'
import Hero from './components/Hero'
import { About, Contact, Experience, Leadership, Projects, Skills } from './components/Sections'
import { profile } from './data'

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-8 text-sm text-muted sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.location}</p>
      </footer>
    </>
  )
}

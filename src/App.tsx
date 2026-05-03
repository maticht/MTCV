import { Hero } from './components/Hero'
import { SideNav } from './components/SideNav'
import { Summary } from './components/Summary'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Languages } from './components/Languages'

function App() {
    return (
        <div className="app">
            <SideNav />
            <main>
                <Hero />
                <Summary />
                <Experience />
                <Skills />
                <Education />
                <Languages />
            </main>
        </div>
    )
}

export default App

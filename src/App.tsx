import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Summary } from './components/Summary'
import { Achievements } from './components/Achievements'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Languages } from './components/Languages'
import { Footer } from './components/Footer'
import { SwipeTrail } from './components/SwipeTrail'

function App() {
    return (
        <div className="app">
            <Header />
            {/*<SwipeTrail>*/}
            {/*    */}
            {/*</SwipeTrail>*/}
            <main>
                <Hero />
                <Summary />
                <Achievements />
                <Experience />
                <Skills />
                <Education />
                <Languages />
            </main>
            <Footer />
        </div>
    )
}

export default App
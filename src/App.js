import './App.css'

// COMPONENTS
import Header from './components/Header/Header'
import Address from './components/Address/Address'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Goals from './components/Goals/Goals'
import Members from './components/Members/Members'
import Schedule from './components/Schedule/Schedule'
import Grade from './components/Grade/Grade'
import Tasks from './components/Tasks/Tasks'
import Registr_cont from './components/Registr_form/Registr_cont'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <div className="background">
        <Goals />
        {/* <Tasks /> */}
        <Members />
        <Schedule />
        <Grade />
      </div>
      <Registr_cont />
      <div className="background">
        <Address />
        <Footer />
      </div>
    </div>
  )
}

export default App

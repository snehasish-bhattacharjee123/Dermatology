import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Treatments from './pages/Treatments'
import TreatmentDetail from './pages/TreatmentDetail'
import Concerns from './pages/Concerns'
import ConcernDetail from './pages/ConcernDetail'
import Gallery from './pages/Gallery'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import BookAppointment from './pages/BookAppointment'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/:slug" element={<TreatmentDetail />} />
          <Route path="/concerns" element={<Concerns />} />
          <Route path="/concerns/:slug" element={<ConcernDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookAppointment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

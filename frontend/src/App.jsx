import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FloatingSocials from './components/layout/FloatingSocials'

// Route-level code splitting — each page is a separate JS chunk
// loaded only when that route is first visited
const Home            = lazy(() => import('./pages/Home'))
const About           = lazy(() => import('./pages/About'))
const Treatments      = lazy(() => import('./pages/Treatments'))
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail'))
const ExosomesTherapy = lazy(() => import('./pages/ExosomesTherapy'))
const Concerns        = lazy(() => import('./pages/Concerns'))
const ConcernDetail   = lazy(() => import('./pages/ConcernDetail'))
const Gallery         = lazy(() => import('./pages/Gallery'))
const Locations       = lazy(() => import('./pages/Locations'))
const Contact         = lazy(() => import('./pages/Contact'))
const BookAppointment = lazy(() => import('./pages/BookAppointment'))

// Minimal loading placeholder — avoids blank screen during chunk fetch
function PageLoader() {
  return (
    <div style={{
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-bg-cream, #faf8f5)',
    }}>
      <div style={{
        width: '2rem',
        height: '2rem',
        border: '2px solid #e0d8d8',
        borderTopColor: 'var(--color-wine, #6b3a5a)',
        borderRadius: '50%',
        animation: 'spin 0.7s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                              element={<Home />} />
            <Route path="/about"                         element={<About />} />
            <Route path="/treatments"                    element={<Treatments />} />
            <Route path="/treatments/exosome-therapy"   element={<ExosomesTherapy />} />
            <Route path="/treatments/exosomes-therapy"  element={<ExosomesTherapy />} />
            <Route path="/treatments/:slug"              element={<TreatmentDetail />} />
            <Route path="/concerns"                      element={<Concerns />} />
            <Route path="/concerns/:slug"                element={<ConcernDetail />} />
            <Route path="/gallery"                       element={<Gallery />} />
            <Route path="/locations"                     element={<Locations />} />
            <Route path="/contact"                       element={<Contact />} />
            <Route path="/book"                          element={<BookAppointment />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingSocials />
    </div>
  )
}

export default App

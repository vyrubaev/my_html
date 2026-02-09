import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Jungling } from './components/Jungling'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="main-content">
              <h2>Welcome to the Dashboard!</h2>
              <p>This is the main content area.</p>
            </main>
          }
        />
        <Route path="/jungling" element={<Jungling />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
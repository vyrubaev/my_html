import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="main-content">
        <h2>Welcome to the Dashboard!</h2>
        <p>This is the main content area of your app. Scroll down to see the footer.</p>
        <p>Keep adding content here to test scrolling behavior.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>More content...</p>
        <p>More content...</p>
        <p>More content...</p>
        <p>More content...</p>
        <p>More content...</p>
      </main>
      <Footer />
    </div>
  )
}

export default App
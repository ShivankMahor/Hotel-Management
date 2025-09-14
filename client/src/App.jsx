import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/Home';
import RoomsPage from './pages/RoomsPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Dummy handlers (can connect to backend later)
  const handleSearch = (filters) => {
    console.log("Searching with filters:", filters);
  };

  const handleBookRoom = (roomId) => {
    console.log("Booking room:", roomId);
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        {/* Navigation */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Main Content */}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage/>
              }
            />
            <Route
              path="/rooms"
              element={<RoomsPage/>}
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
          <Link
            to="/"
            className="bg-[var(--color-secondary)] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            title="Back to Home"
          >
            <span className="text-sm font-medium px-2">Home</span>
          </Link>

          <Link
            to="/rooms"
            className="bg-[var(--color-primary)] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            title="View All Rooms"
          >
            <span className="text-sm font-medium px-2">Rooms</span>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/Home";
// import Rooms from "./pages/Rooms";
// // import Booking from "./pages/Booking";
// // import Profile from "./pages/Profile";
// import AdminDashboard from "./pages/admin/Dashboard";
// import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <Router>
//       {/* <div className="min-h-screen bg-background text-text"> */}
//         {/* Navbar stays across all pages */}
//         {/* <Navbar /> */}

//         {/* <main className="p-6"> */}
//           <Routes>
//             {/* Public pages */}
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/rooms" element={<Rooms />} />
//             {/* <Route path="/booking" element={<Booking />} /> */}
//             {/* <Route path="/profile" element={<Profile />} /> */}

//             {/* Admin-only pages (can protect later with auth logic) */}
//             <Route path="/admin" element={<AdminDashboard />} />

//             {/* 404 fallback */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         {/* </main> */}
//       {/* </div> */}
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
// import LandingPage from './pages/Home';
// import RoomsPage from './pages/RoomsPage';

// function App() {
//   return (
//     <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
//       {/* Navigation */}
//       <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

//       {/* Main Content */}
//       <main>
//         {currentPage === 'landing' ? (
//           <LandingPage 
//             onSearch={handleSearch} 
//             onBookRoom={handleBookRoom}
//           />
//         ) : (
//           <RoomsPage onBookRoom={handleBookRoom} />
//         )}
//       </main>

//       {/* Footer */}
//       <Footer />

//       {/* Floating Action Buttons */}
//       <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
//         {currentPage === 'rooms' && (
//           <button
//             onClick={navigateToHome}
//             className="bg-[var(--color-secondary)] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
//             title="Back to Home"
//           >
//             <span className="text-sm font-medium px-2">Home</span>
//           </button>
//         )}
        
//         {currentPage === 'landing' && (
//           <button
//             onClick={navigateToRooms}
//             className="bg-[var(--color-primary)] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
//             title="View All Rooms"
//           >
//             <span className="text-sm font-medium px-2">Rooms</span>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
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

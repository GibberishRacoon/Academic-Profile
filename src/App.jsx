// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

// // Strony (stwórz pliki w src/pages)
// import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Wspolpraca from "./pages/Wspolpraca";
// // import Blog from "./pages/Blog";
// // import CzymSieZajmuje from "./pages/CzymSieZajmuje";
// // import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen bg-[var(--color-bg)] overflow-x-hidden">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             {/* <Route path="/about" element={<About />} />
//             <Route path="/wspolpraca" element={<Wspolpraca />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/czym-sie-zajmuje" element={<CzymSieZajmuje />} />
//             <Route path="/contact" element={<Contact />} /> */}
//             {/* Możesz dodać 404: */}
//             {/* <Route path="*" element={<NotFound />} /> */}
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Strony
import Home from "./pages/Home";
import MyAchievements from "./pages/MyAchievements";
// import About from "./pages/About";
// import Wspolpraca from "./pages/Wspolpraca";
// import Blog from "./pages/Blog";
// import CzymSieZajmuje from "./pages/CzymSieZajmuje";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[var(--color-bg)] overflow-x-hidden">
        <Navbar />
        <main className="flex-grow pt-16 sm:pt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dorobek-naukowy" element={<MyAchievements />} />
            {/* <Route path="/o-mnie" element={<About />} />
            <Route path="/wspolpraca" element={<Wspolpraca />} />
            <Route path="/dzialalnosc-edukacyjna" element={<Blog />} />
            <Route path="/media" element={<CzymSieZajmuje />} />
            <Route path="/kontakt" element={<Contact />} /> */}
            {/* Możesz dodać 404: */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

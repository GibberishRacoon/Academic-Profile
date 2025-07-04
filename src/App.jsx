import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Strony
import Home from "./pages/Home";
import MyAchievements from "./pages/MyAchievements";
import MediaSection from "./pages/MediaSection";
import Contact from "./pages/ContactForm";
import About from "./pages/AboutMeSection";
import CookiesPolicy from "./pages/Terms/CookiesPolicy";
import PrivacyPolicy from "./pages/Terms/PrivacyPolicy";
import Terms from "./pages/Terms/Terms";
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
            <Route path="/media" element={<MediaSection />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/o-mnie" element={<About />} />

            <Route path="/cookies" element={<CookiesPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            {/* <Route path="/wspolpraca" element={<Wspolpraca />} />
            <Route path="/dzialalnosc-edukacyjna" element={<Blog />} />
            <Route path="/media" element={<CzymSieZajmuje />} />
            <Route path="/kontakt" element={<Contact />} /> */}
            {/* Dodać 404: */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

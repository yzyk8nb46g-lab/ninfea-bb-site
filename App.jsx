import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MobileBar from "./MobileBar.jsx";
import Home from "./Home.jsx";
import Rooms from "./Rooms.jsx";
import Services from "./Services.jsx";
import Location from "./Location.jsx";
import Gallery from "./Gallery.jsx";
import Reviews from "./Reviews.jsx";
import Contact from "./Contact.jsx";
import Privacy from "./Privacy.jsx";
import Cookie from "./Cookie.jsx";
import NotFound from "./NotFound.jsx";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camere" element={<Rooms />} />
          <Route path="/servizi" element={<Services />} />
          <Route path="/posizione" element={<Location />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/recensioni" element={<Reviews />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<Cookie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}

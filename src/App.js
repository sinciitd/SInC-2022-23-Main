import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/homepage/Home";
import Team from "./pages/teampage/Team";
import Contact from "./pages/homepage/contact/Contact";
import Events from "./pages/eventspage/Events";
import Form from "./pages/registration/Form";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Form />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

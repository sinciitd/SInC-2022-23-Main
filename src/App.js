import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/homepage/Home";
import Team from "./pages/teampage/Team";
import Contact from "./pages/homepage/contact/Contact";
import Events from "./pages/eventspage/Events";
import Form from "./pages/registration/Form";
import Expo from "./pages/expopage/Expo";
import './App.css'
import StartupRegister from "./pages/StudentRegister/StartupRegister";
import StudentRegister from "./pages/StudentRegister/StudentRegister";
import MentorRegister from "./pages/StudentRegister/MentorRegister";

function ComponentWithHeaderFooter(component) {
  return (
    <>
      <Header />
      {component}
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ComponentWithHeaderFooter(<Home />)} />
        <Route path="/about" element={ComponentWithHeaderFooter(<Team />)} />
        <Route path="/contact" element={ComponentWithHeaderFooter(<Contact />)} />
        <Route path="/register" element={ComponentWithHeaderFooter(<Form />)} />
        <Route path="/events" element={ComponentWithHeaderFooter(<Events />)} />
        <Route path="/expo" element={<Expo />} />
        <Route path="/startupregister" element={<StartupRegister />} />
        <Route path="/studentregister" element={<StudentRegister />} />
        <Route path="/mentorregister" element={<MentorRegister />} />
      </Routes>
    </>
  );
}

export default App;

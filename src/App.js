import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/homepage/Home";
import Team from "./pages/teampage/Team";
import Contact from "./pages/homepage/contact/Contact";
import Events from "./pages/eventspage/Events";
import Form from "./pages/registration/Form";
import Expo from "./pages/expopage/Expo";
import LoginForm from "./pages/loginpage/Login";
import ChooseRole from "./pages/choose_role/ChooseRole";
import './App.css'

function ComponentWithHeaderFooter(component){
  return(
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
        <Route path="/"         element={ComponentWithHeaderFooter(<Home />)} />
        <Route path="/about"    element={ComponentWithHeaderFooter(<Team />)} />
        <Route path="/contact"  element={ComponentWithHeaderFooter(<Contact />)} />
        <Route path="/register" element={ComponentWithHeaderFooter(<Form />)} />
        <Route path="/events"   element={ComponentWithHeaderFooter(<Events />)} />
        <Route path="/login"    element={<LoginForm />} />
        <Route path="/choose"   element={ComponentWithHeaderFooter(<ChooseRole />)} />
        <Route path="/expo"     element={<Expo />} />
      </Routes>
    </>
  );
}

export default App;

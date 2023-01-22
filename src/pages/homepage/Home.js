import React from "react";
// import Header from './header/Header'
import Hero from './hero/Hero'
import Events from './events/Events'
// import AboutUs from './about-us/AboutUs'
import Contact from './contact/Contact'
// import Register from './register/Register'
import Register from '../registration/Form'
// import Footer from './footer/Footer'

function Home() {
  return (
    <>
      <Hero/>
      <Events/>
      <Contact/>
      <Register/>
    </>
  );
}

export default Home;

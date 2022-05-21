import React from "react";
import Header from './components/header/Header.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Experience from './components/experience/Experience.jsx';
import Services from './components/services/Services.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }

const App = ()=>{
    return(
        <AlertProvider template={AlertTemplate} {...options}>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </AlertProvider>
    )
}
export default App
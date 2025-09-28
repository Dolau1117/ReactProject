import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import { getOwners } from "./Services";
function App() {
    const owners = getOwners();
    const [owner, setOwner] = useState(owners[0]); // default first user


    return (

        <>
            <Header owner={owner} setOwner={setOwner} />
            {/* Example usage: show projects of current owner */}
           
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />

        </>
    )
}

export default App

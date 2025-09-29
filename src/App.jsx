import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import { data } from "./Services";
function App() {
    const owners = data();
    const [owner, setOwner] = useState(owners[1]);


    return (
        
        <>
            <Header owner={owner} setOwner={setOwner} owners={owners} />
           
            <About owner={owner} />
            <Projects owner={owner} />
            <Skills owner={owner} />
            <Contact owner={owner} />
            <Footer owner={owner} />

        </>
    )
}

export default App

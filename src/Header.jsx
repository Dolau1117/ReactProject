import React from "react";
import { aboutMe } from "./Services";
function Header() {
    const me = aboutMe()[0];
    return (
        <header className="container-fluid bg-dark-50">
            <nav className="navbar navbar-expand-lg  bg-primary shadow-sm fixed-top py-3">
                <div className="container-sm d-flex justify-content-between">
                    <div className="d-flex justify-content-start">
                        <img src={me.photo} alt={me.name} className="avatar me-2" />
                        <h1 className="navbar-brand mb-0 text-white"> My Portfolio - ({me.name})</h1>
                    </div>
                    <div className="d-flex justify-content-center text-white">
                        <a className="nav-links d-inline px-2 mdi mdi-information-outline text-decoration-none h5 fw-bolder" href="#about"> About Me</a>
                        <a className="nav-links d-inline px-2 mdi mdi-application-outline text-decoration-none h5 fw-bolder" href="#projects"> Projects</a>
                        <a className="nav-links d-inline px-2 mdi mdi-code-tags text-decoration-none h5 fw-bolder" href="#skills"> Skills</a>
                        <a className="nav-links d-inline px-2 mdi mdi-card-account-mail-outline text-decoration-none h5 fw-bolder" href="#contact"> Contact</a>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;

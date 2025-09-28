import React from "react";
import { aboutMe } from "./Services";
function Header() {
    const me = aboutMe()[0];
    return (
        //<header className="container-fluid bg-dark-50">
        //    <nav className="navbar navbar-expand-lg  bg-primary shadow-sm fixed-top py-3">
        //        <div className="container-sm d-flex justify-content-between">
        //            <div className="d-flex justify-content-start">
        //                <img src={me.photo} alt={me.name} className="avatar me-2" />
        //                <h1 className="navbar-brand mb-0 text-white"> My Portfolio - ({me.name})</h1>
        //            </div>
        //            <div className="d-flex justify-content-center text-white">
        //                <a className="nav-links d-inline px-2 mdi mdi-information-outline text-decoration-none h5 fw-bolder" href="#about"> About Me</a>
        //                <a className="nav-links d-inline px-2 mdi mdi-application-outline text-decoration-none h5 fw-bolder" href="#projects"> Projects</a>
        //                <a className="nav-links d-inline px-2 mdi mdi-code-tags text-decoration-none h5 fw-bolder" href="#skills"> Skills</a>
        //                <a className="nav-links d-inline px-2 mdi mdi-card-account-mail-outline text-decoration-none h5 fw-bolder" href="#contact"> Contact</a>
        //            </div>
        //        </div>
        //    </nav>
        //</header>
        <header className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top py-3" aria-label="Eighth navbar example">
                <div className="container">
                    <a className="navbar-brand text-white" href="#">  My Portfolio - ({me.name})</a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> <div className="navbar-collapse collapse" id="navbarsExample07">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active mdi mdi-home" aria-current="page" href="#"> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white mdi mdi-information-outline" href="#about"> About Me</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white mdi mdi-application-outline" href="#projects" > Projects</a>
                                
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white mdi mdi-code-tags" href="#skills" > Skills</a>
                                
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white mdi mdi-card-account-mail-outline" href="#contact"> Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Header;

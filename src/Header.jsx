import React from "react";

function Header({ owner, setOwner, owners }) {

    return (
        <header className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed-top py-3" aria-label="Eighth navbar example">
                <div className="container">
                    {/* If owner is object, show owner.name */}
                    <a className="navbar-brand text-dark" href="#">
                        My Portfolio - ({owner.name || owner})
                    </a>

                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample07"
                        aria-controls="navbarsExample07"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarsExample07">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-dark mdi mdi-home" aria-current="page" href="#"> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark mdi mdi-information-outline" href="#about"> About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark mdi mdi-application-outline" href="#projects"> Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark mdi mdi-code-tags" href="#skills"> Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark mdi mdi-card-account-mail-outline" href="#contact"> Contact</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle text-dark fw-bolder btn bg-white mdi mdi-account-switch"
                                    href="#"
                                    id="userDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Log-Out
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                    {owners.map((me) => (
                                        <li key={me.name} className="text-center border" onClick={() => setOwner(me)} style={{ cursor: "pointer" }}>
                                            <button
                                                className="dropdown-item text-center text-primary fw-bolder">
                                                <img
                                                    className="img-fluid me-2"
                                                    src={me.photo || me.about?.[0]?.photo}
                                                    alt={me.name}
                                                    style={{ maxHeight: "40px" }}
                                                />
                                               
                                           </button>
                                           {me.name}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;

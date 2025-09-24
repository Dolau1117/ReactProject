import React from "react";
import { getProjects } from "./Services"
function Projects() {
    const projects = getProjects();
    return (
        <section id="projects" className="container" style={styles.section}>
            <div className="container-fluid">
                <div className="row align-items-center" style={{ minHeight: "300px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center text-primary row">
                        <label className="fw-bolder text-uppercase text-center display-4">Projects</label>
                        
                        <i className="display-3 mdi mdi-application-outline"></i>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="text-start">
                            {projects.map((project, index) => (
                                <div key={index}>
                                    <h3 className="text-info">{index + 1}. {project.name}</h3>
                                    <p className="text-primary">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

const styles = {
    section: {
        padding: "40px",
        background: "#f9f9f9"
    }
};

export default Projects;

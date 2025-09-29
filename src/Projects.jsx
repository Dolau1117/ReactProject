import React from "react";
function Projects({ owner }) {
    const projects = owner.project || [];
    if (!projects) return null;
    return (
        <div className="container-fluid" style={{ minHeight: "400px" }}>
            <section id="projects" >
                <div className="my-5 mdi mdi-application-outline fw-bolder text-dark text-uppercase text-center display-4 p-0"> Projects</div>
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        {projects.map((proj, index) => (
                            <div
                                key={index}
                                className="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-1 d-flex justify-content-center"
                            >
                                <div className="table rounded border border-dark shadow">
                                    <div className="px-4 pb-3">
                                        <div className="fw-bolder text-uppercase h5 text-dark text-center pt-5">
                                            {proj.name}
                                        </div>
                                        <div className="h6 my-auto text-dark">
                                            {proj.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </section>
        </div>

    );
}


export default Projects;

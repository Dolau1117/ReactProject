import React from "react";
function Skills({ owner }) {
    const skills = owner.skills;

    return (
        <div className="container-fluid" style={{ minHeight: "400px" }}>
            <section id="skills" >
                <div className="my-5 mdi mdi-code-tags fw-bolder text-primary text-uppercase text-center display-4 p-0"> Skills</div>
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        {skills.map((skill, index) => (
                          
                            <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-lg-4 col-sm-12 p-1 d-flex justify-content-center">
                                <div className="table rounded border border-info shadow" >

                                    <div className="">
                                       
                                        <div className="px-4 pb-3">
                                            <div className=" fw-bolder text-uppercase h5 text-primary text-center pt-5">
                                                {skill.name}
                                            </div>

                                            <div className=" h6 my-auto text-info">
                                                {skill.description}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div >
                        ))}
                    </div>

                </div>

            </section>
        </div>

    );
}


export default Skills;

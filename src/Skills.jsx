import React from "react";
import { getSkills } from "./Services";
function Skills() {
    const skillList = getSkills();

    return (
        <section id="skills" className="container" style={styles.section}>
            <div className="container-fluid">
                <div className="row align-items-center" style={{ minHeight: "300px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center text-primary row">
                        <label className="fw-bolder text-uppercase text-center display-4">Skills</label>
                        <i className="mdi mdi-code-tags display-3"></i>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="text-start">
                            {skillList.map((skill, index) => (
                                <div className="decoration-none" key={index}>
                                    <h3 className="text-info">{index + 1}. {skill.name}</h3>
                                    <p className="text-primary">{skill.description}</p>
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

export default Skills;

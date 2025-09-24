import React from "react";
import { aboutMe } from "./Services";
function About() {
    const about = aboutMe();
    return (
        <section className="container-sm" id="about" style={styles.section}>

            {about.map((me, index) => (
                <div key={index} className="row align-items-center" style={{ minHeight: "300px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <img src={me.photo} alt={me.name} className=" rounded" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <label className="fw-bolder text-uppercase text-center text-info display-4 py-3" >About Me</label>
                        <p className="text-center text-primary h3">
                            Hi, I'm {me.name}, {me.description}.
                        </p>
                    </div>
                </div>
            ))}

        </section>
    );
}

const styles = {
    section: {
        padding: "40px",
        textAlign: "center"
    }

};

export default About;

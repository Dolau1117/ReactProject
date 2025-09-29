import React from "react";
function About({ owner }) {
    const me = owner || [];
    return (
        <section id="about" className="container-sm mt-5" style={styles.section}>
                <div  className="row align-items-center" style={{ minHeight: "300px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <img src={me.photo} alt={me.name} className=" rounded" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <label className="fw-bolder text-uppercase text-center text-dark display-4 py-3" >About Me</label>
                        <p className="text-center text-dark h3">
                        Hi, I'm {me.name}, {me.description}.
                        </p>
                    </div>
                </div>

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

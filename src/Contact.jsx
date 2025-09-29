import React from "react";
function Contact({ owner }) {
    const contactlist = owner.contact || [];
    return (
        <section id="contact" className="container" style={styles.section}>
            <div className="container-fluid">
                <div className="row align-items-center" style={{ minHeight: "300px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center text-dark row">
                        <label className="fw-bolder text-uppercase text-center display-4">Contact</label>
                        <i className="mdi mdi-card-account-mail-outline display-3"></i>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-start mb-2">
                        {contactlist.map((contact, index) => (
                            <div key={index}>
                                <h4 className={contact.icon} > {contact.name}: <a className="h4 text-dark" href={contact.url}> {contact.description}</a></h4>
                                

                            </div>
                        ))}
                    </div>
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

export default Contact;

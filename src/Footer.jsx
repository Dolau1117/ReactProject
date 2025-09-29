import React from "react";
function Footer({owner }) {
    const details = owner;
    return (
        <footer style={styles.footer}>
            <p className="h5">© 2025 {details.name}. All rights reserved.</p>
        </footer >
    );
}

const styles = {
    footer: {
        padding: "30px",
        background: "white",
        color: "black",
        textAlign: "center"
    }
};

export default Footer;

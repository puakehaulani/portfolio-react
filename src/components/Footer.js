import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer mt-auto py-3">
            <a href="https://github.com/puakehaulani"><FontAwesomeIcon icon={faGithubAlt} size="2x" /></a>
            <a href="https://www.linkedin.com/in/lexijack"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
            <a href="https://www.instagram.com/puakehaulani/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        </footer>
    );
}

export default Footer;

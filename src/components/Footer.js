import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer mt-auto py-3 text-center">

            <a className="px-4" href="https://github.com/puakehaulani" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubAlt} size="2x" /></a>
            <a className="px-4" href="https://www.linkedin.com/in/lexijack" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
            <a className="px-4" href="https://www.instagram.com/puakehaulani/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>

        </footer>
    );
}

export default Footer;

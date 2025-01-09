import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a
              href="https://github.com/EmersonAndrey"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/github.png" alt="Github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/emerson-andrey-597784249/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              href="mailto:eandrey413@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/email.jpg" alt="Email" />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <p>Dev. Emerson Andrey</p>
      </section>
    </footer>
  );
};

export default Footer;

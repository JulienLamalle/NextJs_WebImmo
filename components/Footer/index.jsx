import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className="pt-4 text-white bg-night">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" className="text-center align-self-center">
            <h5 className="title">
              WebImmo <MDBIcon far icon="building" />
            </h5>
            <p>Trouvez le bien immobilier de vos rêves...</p>
          </MDBCol>
          <MDBCol md="6" className="text-center">
            <h5 className="title">Retrouvez-moi ici</h5>
            <ul className="px-0">
              <li className="d-inline m-2">
                <a
                  className="text-white"
                  href="https://github.com/JulienLamalle"
                  target="_blank"
                >
                  <MDBIcon
                    fab
                    icon="github"
                    className="mt-2"
                    style={{ fontSize: "1.3em" }}
                  />
                </a>
              </li>
              <li className="d-inline m-2">
                <a
                  className="text-white"
                  href="https://www.linkedin.com/in/julien-lamalle/"
                  target="_blank"
                >
                  <MDBIcon
                    fab
                    icon="linkedin"
                    className="mt-2"
                    style={{ fontSize: "1.3em" }}
                  />
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Fait avec{" "}
          <span className="text-danger">&#10084;&#65039;</span> par{" "}
          <a href="https://julienlamalle.netlify.app/" className="text-white"> Julien Lamalle</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;

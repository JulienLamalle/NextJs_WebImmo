import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBContainer,
} from "mdbreact";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import { useRouter } from "next/router";
import Head from 'next/head'

const ContactPage = () => {
  const router = useRouter();

  const onSubmit = (event) => {
    event.preventDefault();
    router.push("/");
  };
  return (
    <div>
      <Head>
        <title>WebImmo - Contact</title>
      </Head>
      <Layout>
        <MDBContainer>
          <section className="contact-section my-5">
            <MDBCard className="contact-card">
              <Carousel />
              <MDBRow>
                <MDBCol lg="8">
                  <MDBCardBody className="form">
                    <h3 className="mt-4">
                      <MDBIcon icon="envelope" className="pr-2" />
                      Ecrivez-nous:
                    </h3>
                    <MDBRow>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="text"
                            id="form-contact-name"
                            label="Votre nom"
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="text"
                            id="form-contact-firstname"
                            label="Votre prénom"
                          />
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="text"
                            id="form-contact-phone"
                            label="Votre numéro de téléphone"
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="text"
                            id="form-contact-email"
                            label="Votre email"
                          />
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="12">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="textarea"
                            id="form-contact-message"
                            label="Votre message"
                          />
                          <button
                            className="btn-block smBtn"
                            onClick={onSubmit}
                          >
                            Envoyer
                          </button>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol lg="4">
                  <MDBCardBody className="contact text-center h-100 white-text">
                    <h3 className="my-4 pb-2">Informations de contact</h3>
                    <ul className="text-lg-left list-unstyled ml-4">
                      <li>
                        <p>
                          <MDBIcon icon="map-marker-alt" className="pr-2" />
                          France
                        </p>
                      </li>
                      <li>
                        <p>
                          <MDBIcon icon="phone" className="pr-2" />
                          +33758742561
                        </p>
                      </li>
                      <li>
                        <p>
                          <MDBIcon icon="envelope" className="pr-2" />
                          Julienlamalle63100@gmail.com
                        </p>
                      </li>
                    </ul>
                    <hr className="hr-light my-4" />
                    <ul className="list-inline text-center list-unstyled">
                      <li className="list-inline-item">
                        <a
                          href="https://github.com/JulienLamalle"
                          className="p-2 fa-lg w-ic text-night"
                          target="_blank"
                        >
                          <MDBIcon fab icon="github" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/in/julien-lamalle"
                          className="p-2 fa-lg w-ic text-night"
                          target="_blank"
                        >
                          <MDBIcon fab icon="linkedin-in" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://julienlamalle.netlify.app/"
                          className="p-2 fa-lg w-ic text-night"
                          target="_blank"
                        >
                          <MDBIcon fa icon="globe" />
                        </a>
                      </li>
                    </ul>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </section>
        </MDBContainer>
      </Layout>
    </div>
  );
};

export default ContactPage;

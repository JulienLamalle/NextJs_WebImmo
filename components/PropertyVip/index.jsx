import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';
import {Animated} from "react-animated-css";

const PropertyVip = ({ properties }) => (
  <section className="container-fluid">
    <h2 className="h2-responsive font-weight-bold text-center my-4">
      Bien sponsorisés
    </h2>
    <MDBRow>
      {properties &&
          properties.map((property) => (
            <MDBCard md="4" lg="4" className="col" key={property.title}>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={property.pictures[0]} alt={property.title} fluid />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{property.title}</MDBCardTitle>
                <MDBCardText>
                  <strong>{property.price}</strong>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          ))}
    </MDBRow>
  </section>
);

export default PropertyVip;

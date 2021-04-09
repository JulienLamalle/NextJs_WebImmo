import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { PriceFormated } from "../Helpers";

const PropertyVip = ({ properties }) => (
  <section className="container-fluid" style={{marginTop: 60 + 'px !important'}}>
    <h2 className="h2-responsive font-weight-bold text-center my-4 text-night">
      Découvrez nos biens sponsorisés
    </h2>
    <MDBRow>
      {properties &&
        properties.map((property) => (
          <MDBCol md="4" lg="4" key={property.title}>
            <MDBCard className="mb-4">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src={property.pictures[0]}
                  alt={property.title}
                  className="globalImg"
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{property.title}</MDBCardTitle>
                <MDBCardText>
                  <strong>{PriceFormated(property.price)}</strong>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
    </MDBRow>
  </section>
);

export default PropertyVip;

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
import { PriceFormatted } from "../Helpers";

const PropertyVip = ({ properties }) => (
  <section className="container-fluid my-5">
    <h2 className="h2-responsive font-weight-bold text-center my-4 text-night">
      Biens sponsorisés
    </h2>
    <MDBRow>
      {properties &&
        properties.map((property) => (
          <MDBCol md="4" lg="4" key={property.title}>
            <MDBCard>
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
                  <strong>{PriceFormatted(property.price)}</strong>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
    </MDBRow>
  </section>
);

export default PropertyVip;

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
  MDBBtn,
} from "mdb-react-ui-kit";
import { PriceFormatted } from "../Helpers";

const PropertySection = ({ properties, handleDisplay }) => (
  <section className="container-fluid my-3">
    <h2 className="h2-responsive font-weight-bold text-center mb-4 text-night">
      Découvrez notre Catalogue
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
                  <strong>{PriceFormatted(property.price)}</strong>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
    </MDBRow>
    <div className="text-center">
      <button
        className="lift py-3 globalBtn"
      >
        Afficher plus
      </button>
      <button
        className="lift py-3 ml-3 globalBtn"
        onClick={handleDisplay}
      >
        Pourquoi nous choisir ?
      </button>
    </div>
  </section>
);

export default PropertySection;

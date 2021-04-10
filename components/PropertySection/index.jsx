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
import { PriceFormated } from "../Helpers";
import Link from 'next/link'

const PropertySection = ({ properties, handleDisplay }) => (
  <section className="container-fluid mb-3 mt-5">
    <h2 className="h2-responsive font-weight-bold text-center mb-4 text-night">
      Découvrez notre Catalogue
    </h2>
    <MDBRow>
      {properties &&
        properties.map((property) => (
          <MDBCol md="4" lg="4" key={property.title}>
            <MDBCard className="mb-4">
              <Link
                href="/property/[slug]"
                as={`/property/${property.slug}`}
                passHref
              >
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
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </MDBRipple>
              </Link>
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
    <div className="text-center">
      <button className="lift py-3 globalBtn my-3">Afficher plus</button>
      <button className="lift py-3 ml-3 globalBtn my-3" onClick={handleDisplay}>
        Pourquoi nous choisir ?
      </button>
    </div>
  </section>
);

export default PropertySection;

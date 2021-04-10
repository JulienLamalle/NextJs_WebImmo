import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBRipple,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { PriceFormated } from "../Helpers";
import Link from "next/link";

const Card = ({ properties }) => {
  let index = 0;
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5 text-night">
          Découvrez la liste de tous nos biens
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Chaque bien chez WebImmo est unique, nous sélectionnons les domaines
          les plus convoités du marché pour vous et nous vous accompagons du
          début à la fin de votre projet.
        </p>
        {properties &&
          properties.map((property, index) => (
            <MDBRow>
              <MDBCol lg="5">
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
                      className="globalImg mb-2"
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </Link>
              </MDBCol>
              <MDBCol lg="7">
                <span className="text-night">
                  <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="building" className="pr-2" />
                    {property.category.name}
                  </h6>
                </span>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>{property.title}</strong>
                </h3>
                <p>{property.description.slice(0, 260)}...</p>
                <p>
                  <strong>{PriceFormated(property.price)}</strong>
                </p>
                <p className="text-night">
                  <MDBIcon icon="city" className="mr-2" />
                  <strong>{property.city}</strong>
                </p>
              </MDBCol>
              <div style={{ display: "none" }}>{index++}</div>
              {index == properties.length ? "" : <hr className="my-5" />}
            </MDBRow>
          ))}
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;

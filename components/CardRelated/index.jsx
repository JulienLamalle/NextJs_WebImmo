import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBCol,
  MDBRow,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import Link from "next/link";
import { PriceFormated } from "../Helpers";

const CardRelated = ({ properties }) => {
  return (
    <MDBRow>
      {properties &&
        properties.map((property) => (
          <MDBCol className="mb-3" md="4" lg="4" key={property._id}>
            <MDBCard>
              <MDBCardHeader>{property.title}</MDBCardHeader>
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
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </MDBRipple>
              </Link>
              <MDBCardFooter>
                <div className="text-night">
                  {PriceFormated(property.price)}
                </div>
                <p>
                  <small>{property.city}</small>
                </p>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        ))}
    </MDBRow>
  );
};

export default CardRelated;

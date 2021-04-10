import React from "react";
import { MDBCard, MDBCardImage, MDBRipple } from "mdb-react-ui-kit";
import { PriceFormated } from "../Helpers";
import Link from "next/link";

const CardVip = ({ properties }) => {
  return (
    <div>
      {properties &&
        properties.map((property) => (
          <MDBCard className="mb-3" key={property._id}>
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
                  className="d-block w-100"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </MDBRipple>
            </Link>
            <div className="img-top">
              <button className="d-inline-flex stars">En Vedette</button>
              <button className="d-inline-flex exclu">Exclusivité</button>
            </div>
            <div className="price">{PriceFormated(property.price)}</div>
          </MDBCard>
        ))}
      <style jsx>
        {`
          .img-top {
            position: absolute;
            top: 10px;
            left: 5px;
          }
          .stars {
            background-color: #00695c;
            color: white;
            text-transform: capitalize;
            font-size: 10px;
            font-weight: bolder;
            border: 0px;
            margin-right: 5px;
          }
          .exclu {
            border: 0px;
            background-color: red;
            color: white;
            font-weight: bolder;
            text-transform: capitalize;
            font-size: 10px;
          }
          .price {
            position: absolute;
            bottom: 5px;
            left: 16px;
            font-weight: bold;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default CardVip;

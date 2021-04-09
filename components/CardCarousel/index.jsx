import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact";

const CardCarousel = ({ property }) => {
  return (
    <div className="myCarousel">
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            {property && property.pictures[0] ? (
              <MDBView>
                <img
                  className="d-block w-100 carousel-img"
                  src={property.pictures[0]}
                  alt="property picture"
                />
              </MDBView>
            ) : null}
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            {property && property.pictures[1] ? (
              <MDBView>
                <img
                  className="d-block w-100 carousel-img"
                  src={property.pictures[1]}
                  alt="property picture"
                />
              </MDBView>
            ) : null}
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <style jsx>
        {
          `
          @media (min-width: 768px) {
            .myCarousel {
              width: 100%
            }

            .carousel-img {
              width: 100%;
              height: 600px;
              display: block;
            }
          }
          
          @media (max-width: 768px) {
            .myCarousel {
              width: 100%
            }

            .carousel-img {
              width: 100%;
              height: 300px;
              display: block;
            }
          }
          `
        }
      </style>
    </div>
  );
};

export default CardCarousel;

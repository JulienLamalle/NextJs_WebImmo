import React from "react";
import Collapse from "../Collapse";
import { PriceFormated } from "../Helpers";
import dayjs from "dayjs";

const Slug = ({ property }) => {
  return (
    <div className="mt-4">
      <h1 className="text-night">{property.title}</h1>
      <hr className="my-3" />
      <div>
        Trouvé dans la catégorie{" "}
        <span className="text-night font-weight-bold">
          {property.category.name}
        </span>
      </div>
      <div>{property.address}</div>
      <hr className="my-2" />
      <div className="description mt-4 mb-3">{property.description}</div>
      <Collapse title="Adresse de la propriété">
        <section className="mt-3 pl-3">
          <div>
            <span className="font-weight-bolder">Ville: </span>
            {property.city}
          </div>
          <div>
            <span className="font-weight-bolder">Adresse: </span>
            {property.address}
          </div>
        </section>
      </Collapse>
      <Collapse title="Details de la propriété">
        <section className="mt-3 pl-3">
          <div>
            <span className="font-weight-bolder">Surface: </span>
            {property.surface} m²
          </div>
          <div>
            <span className="font-weight-bolder">Prix: </span>
            {PriceFormated(property.price)}
          </div>
          <div>
            <span className="font-weight-bolder">Chambre(s): </span>
            {property.bedrooms}
          </div>
          <div>
            <span className="font-weight-bolder">Catégorie: </span>
            {property.category.name}
          </div>
          <div>
            <span className="font-weight-bolder">Date de création: </span>
            Le {dayjs(property.createdAt).format("DD/MM/YYYY")} à{" "}
            {dayjs(property.createdAt).format("hh")}h et{" "}
            {dayjs(property.createdAt).format("mm")} minutes.
          </div>
        </section>
      </Collapse>
      <style jsx>
        {`
          .description {
            white-space: pre-line;
          }
        `}
      </style>
    </div>
  );
};

export default Slug;

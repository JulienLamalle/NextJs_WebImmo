import React from "react";
import { MDBContainer, MDBDataTableV5, MDBIcon, MDBView } from "mdbreact";
import { AdminRoute } from "../../auth/adminRoutes";
import Layout from "../../components/Layout";
import useSWR from "swr";
import api from "../../auth/axios";
import dayjs from "dayjs";
import { PriceFormated } from "../../components/Helpers";
import useAuth from "../../auth/context";
import Link from "next/link";

const fetcher = (url) => api.get(url).then((res) => res.data.data);

const PropertyList = () => {
  const { user } = useAuth();
  const { data: properties } = useSWR("/api/properties?limit=30", fetcher);

  const styles = {
    forcedInline: {
      display: "inline",
      width: "10px",
      height: "100px",
    },
    iconTrue: {
      color: "#2BBBAD",
    },
    iconFalse: {
      color: "red",
    },
  };

  const datatable = {
    columns: [
      {
        label: "Titre",
        field: "title",
        sort: "asc",
      },
      {
        label: "Catégorie",
        field: "category",
        sort: "asc",
      },
      {
        label: "Description",
        field: "description",
        sort: "asc",
      },
      {
        label: "Prix",
        field: "price",
        sort: "asc",
      },
      {
        label: "Image",
        field: "pictures",
        sort: "asc",
      },
      {
        label: "vendu",
        field: "sold",
        sort: "asc",
      },
      {
        label: "Vip",
        field: "vip",
        sort: "asc",
      },
      {
        label: "Date_de_creation",
        field: "createdAt",
        sort: "asc",
      },
      {
        label: "Actions",
        field: "action",
      },
    ],
    rows:
      properties &&
      properties.map((property) => {
        return {
          title: property.title,
          description: <div>{property.description.slice(0, 200)}</div>,
          price: PriceFormated(property.price),
          category: property.category.name,
          pictures: property && (
            <Link
              href="/property/[slug]"
              as={`/property/${property.slug}`}
              passHref
            >
              <MDBView hover zoom waves>
                <img
                  src={property.pictures[0]}
                  alt="Premier slide"
                  width={120}
                  height={80}
                />
              </MDBView>
            </Link>
          ),
          sold:
            (property.sold === false && (
              <div className="text-center">
                <MDBIcon far icon="thumbs-down" style={styles.iconFalse} />
              </div>
            )) ||
            (property.sold === true && (
              <div className="text-center">
                <MDBIcon far icon="thumbs-up" style={styles.iconTrue} />
              </div>
            )),
          vip:
            (property.vip === false && (
              <div className="text-center">
                <MDBIcon far icon="thumbs-down" style={styles.iconFalse} />
              </div>
            )) ||
            (property.vip === true && (
              <div className="text-center">
                <MDBIcon far icon="thumbs-up" style={styles.iconTrue} />
              </div>
            )),
          createdAt: (
            <div>
              Le {dayjs(property.createdAt).format("DD/MM/YYYY")} à{" "}
              {dayjs(property.createdAt).format("hh")}h et{" "}
              {dayjs(property.createdAt).format("mm")} minutes.
            </div>
          ),
          action: (
            <div>
              <div className="text-center">
                <MDBIcon far icon="eye" />
              </div>
            </div>
          ),
        };
      }),
  };

  return (
    <div>
      {user && user.role === "admin" && (
        <Layout>
          <MDBContainer fluid>
            <MDBDataTableV5
              hover
              entriesOptions={[5, 10, 15, 20, 30]}
              entries={5}
              pagesAmount={4}
              data={datatable}
              pagingTop
              entriesLabel="Biens par page"
              infoLabel={["Affiche", "à", "de", "biens"]}
              searchTop
              searchBottom={false}
              responsive={true}
            />
          </MDBContainer>
        </Layout>
      )}
    </div>
  );
};

export default AdminRoute(PropertyList);

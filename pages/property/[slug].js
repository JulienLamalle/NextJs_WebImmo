import React from "react";
import Head from "next/head";
import api from "../../auth/axios.js";
import Layout from "../../components/Layout";
import CardCarousel from "../../components/CardCarousel";
import {
  MDBCard,
  MDBCardBody,
  MDVContainer,
  MDBCol,
  MDBRow,
  MDBContainer,
} from "mdb-react-ui-kit";
import Slug from '../../components/Slug'

const Property = ({ property }) => {
  return (
    <div>
      <Head>
        <title>WebImmo - {property.title}</title>
      </Head>
      {property && (
        <Layout>
          <MDBContainer>
            <MDBCard>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="9" lg="9">
                    <CardCarousel property={property} />
                    <Slug property={property}/>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </Layout>
      )}
    </div>
  );
};

export const getStaticPaths = async () => {
  const { data } = await api.get("/api/properties?limit=100");
  const properties = data.data;
  const paths = properties.map((property) => ({
    params: { slug: property.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { data: property } = await api.get(`/api/property/${slug}`);

  return {
    props: {
      property,
    },
  };
};

export default Property;

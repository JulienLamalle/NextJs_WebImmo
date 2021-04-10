import React from "react";
import Head from "next/head";
import api from "../../auth/axios.js";
import Layout from "../../components/Layout";
import CardCarousel from "../../components/CardCarousel";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBIcon
} from "mdb-react-ui-kit";
import Slug from '../../components/Slug'
import CardVip from "../../components/CardVip";

const Property = ({ property, propertiesVip }) => {

  const styles = {
    fontSize: 15
  }

  return (
    <div>
      <Head>
        <title>WebImmo</title>
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
                  <MDBCol md="3" lg="3">
                    <h4 className="mt-5">Contactez-nous</h4>
                    <div style={styles}>
                      <MDBIcon icon="calculator" className="mr-2" />
                      10 rue des vainqueurs 
                    </div>
                    <div style={styles}>
                      <MDBIcon icon="mobile-alt" className="mr-2" />
                      +33758742561
                    </div>
                    <div style={styles}>
                      <MDBIcon icon="envelope" className="mr-2" />
                      Julienlamalle63100@gmail.com
                    </div>
                    <h3 className="mt4 mb-3">Biens sponsorisés</h3>
                    <CardVip properties={propertiesVip} />
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
  const paths = properties.map(property => ({
    params: { slug: property.slug }
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { data: property } = await api.get(`/api/property/${slug}`);
  const { data: propertiesVip } = await api.get('/api/properties/vip')

  return {
    props: {
      property,
      propertiesVip
    },
  };
};

export default Property;

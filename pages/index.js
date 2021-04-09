import React, { useState } from 'react';
import Head from 'next/head'
import Layout from '../components/Layout'
import api from '../auth/axios'
import PropertyVip from '../components/PropertyVip'
import { MDBContainer } from 'mdb-react-ui-kit';
import Carousel from '../components/Carousel'
import PropertySection from '../components/PropertySection';
import Features from '../components/Features';

export default function Home({propertiesVip, properties }) {
  const [estate, setEstate] = useState(true);

  const handleDisplay = (event) => {
    event.preventDefault();
    setEstate(!estate)
  }

  if (estate) {
    return (
      <div>
        <Head>
          <title>WebImmo</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        </Head>
        <Layout>
          <Carousel />
          <MDBContainer>
            <PropertyVip properties={propertiesVip} />
            <PropertySection properties={properties} handleDisplay={handleDisplay} />
          </MDBContainer>
        </Layout>
      </div>
    )
  } else {
    return (
      <div>
        <Head>
          <title>WebImmo</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        </Head>
        <Layout>
          <Carousel />
          <MDBContainer>
            <Features handleDisplay={handleDisplay} />
          </MDBContainer>
        </Layout>
      </div>
    )
  }
}

export const getStaticProps = async () => {
  const {data: propertiesVip} = await api.get('/api/properties/vip');
  const {data} = await api.get('/api/properties?limit=6')
  const properties = data.data

  return {
    props: {
      propertiesVip,
      properties
    }
  }
}
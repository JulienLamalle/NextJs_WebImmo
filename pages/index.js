import Head from 'next/head'
import Layout from '../components/Layout'
import api from '../auth/axios'
import PropertyVip from '../components/PropertyVip'
import { MDBContainer } from 'mdb-react-ui-kit';
import Carousel from '../components/Carousel'

export default function Home({propertiesVip}) {
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
        </MDBContainer>
      </Layout>
    </div>
  )
}

export const getStaticProps = async () => {
  const {data: propertiesVip} = await api.get('/api/properties/vip');

  return {
    props: {
      propertiesVip
    }
  }
}
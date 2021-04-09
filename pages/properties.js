import React from 'react';
import api from '../auth/axios'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { MDBContainer } from 'mdb-react-ui-kit';

const Properties = ({ properties }) => {
  return (
    <Layout>
      <MDBContainer>
        <Card properties={properties} />
      </MDBContainer>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const {data} = await api.get('/api/properties')
  const properties = data.data
  
  return {
    props: {
      properties
    }
  }
}

export default Properties;
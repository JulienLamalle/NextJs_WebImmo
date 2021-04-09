import React from 'react';
import api from '../auth/axios'
import Layout from '../components/Layout'

const Properties = ({ properties }) => {
  return (
    <Layout>
      {JSON.stringify(properties)}
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
import React from "react";
import Head from 'next/head'
import api from "../auth/axios";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { MDBContainer } from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

const Properties = ({ properties, currentPage, pageCount }) => {
  const router = useRouter();

  const paginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;
    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };
  return (
    <section>
      <Head>
        <title>WebImmo - Liste des biens</title>
      </Head>
      <Layout>
        <MDBContainer>
          <Card properties={properties} />
          <div className="paginate-center">
            <ReactPaginate
              onPageChange={paginationHandler}
              initialPage={currentPage - 1}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              previousLabel="Precedent"
              nextLabel="Suivant"
              activeClassName="actived"
              breakLabel="..."
              pageClassName="paginate"
              containerClassName="custom-paginate"
            />
          </div>
        </MDBContainer>
      </Layout>
    </section>
  );
};

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const { data } = await api.get(`/api/properties?page=${page}`);
  const properties = data.data;
  const currentPage = data.currentPage;
  const pageCount = data.totalPages;

  return {
    props: {
      properties,
      currentPage,
      pageCount,
    },
  };
};

export default Properties;

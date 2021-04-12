import React from "react";
import Head from "next/head";
import api from "../auth/axios";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { MDBContainer } from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import SearchFilter from "../components/SearchFilter";

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
          <SearchFilter />
          <h2 className="h1-responsive font-weight-bold text-center my-4 text-night">
            Découvrez la liste de tous nos biens
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Chaque bien chez WebImmo est unique, nous sélectionnons les domaines
            les plus convoités du marché pour vous et nous vous accompagons du
            début à la fin de votre projet.
          </p>
          <Card properties={properties} />
          <div className="d-flex row justify-content-center mx-auto paginate-center">
            <ReactPaginate
              onPageChange={paginationHandler}
              initialPage={currentPage - 1}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
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

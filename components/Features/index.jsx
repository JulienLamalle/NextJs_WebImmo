import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

const Features = ({ handleDisplay }) => {
  return (
    <section className="text-center mb-5">
      <h2 className="h2-responsive font-weight-bold text-center mb-4 text-night">
        Pourquoi nous-choisir ?
      </h2>

      <p className="grey-text w-responsive mx-auto mb-5 wow fadeIn">
        Valoriser son bien est d'une importance capitale pour une vente
        réussite, chez WebImmo nous en avons pleinement confiance, et c'est pour
        cela que toute notre expertise et notre expérience sont mises en oeuvre
        pour vous accompagner.
      </p>

      <div className="row wow fadeIn">
        <div className="col-lg-4 text-center">
          <div className="icon-area">
            <div className="circle-icon">
              <i className="fas fa-camera text-night"></i>
            </div>
            <br />
            <h5 className="text-dark font-weight-bold mt-2">
              Numérisation de votre bien
            </h5>
            <div className="mt-1">
              <p className="mx-3 grey-text">
                Nous mettons en place gratuitement un service de visite
                virtuelle. Cela permet de faire, pour nos clients locaux et
                internationaux, une pré-visite de votre bien. Cela permet de
                sélectionner les clients et ainsi obtenir des clients de qualité
                pour vous faire gagner du temps. Enfin, votre bien est visitable
                24h/24 et 7jr/7 !
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 text-center">
          <div className="icon-area">
            <div className="circle-icon">
              <i className="fas fa-book text-night"></i>
            </div>
            <br />
            <h5 className="text-dark font-weight-bold mt-2">
              Présence dans le catalogue immobilier
            </h5>
            <div className="mt-1">
              <p className="mx-3 grey-text">
                En nous faisant confiance, votre bien immobilier paraîtra dans
                notre catalogue immobilier distribué chez les professions
                libérales de votre quartier, ainsi que dans les commerces de
                proximité. Ainsi, votre bien gagne toujours plus en visibilité
                et en présence physique comme numérique.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 text-center mb-4">
          <div className="icon-area">
            <div className="circle-icon">
              <i className="fas fa-user text-night"></i>
            </div>
            <br />
            <h5 className="text-dark font-weight-bold mt-2">
              Suivi personnalisé
            </h5>
            <div className="mt-1">
              <p className="mx-3 grey-text">
                Notre équipe vous accompagne dans votre projet immobilier. Vous
                n’aurez qu’un seul & unique interlocuteur durant toute la durée
                de la vente. Nous nous engageons à vous fournir un compte-rendu
                hebdomadaire avec statistiques et à vous informer en temps réel
                de l’évolution du marché.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          className="lift py-3 ml-3 globalBtn topMarged"
          onClick={handleDisplay}
        >
          Voir les biens de l'agence
        </button>
      </div>
    </section>
  );
};

export default Features;

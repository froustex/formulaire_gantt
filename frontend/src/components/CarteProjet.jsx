/* eslint-disable */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GrFormView } from "react-icons/gr";
import "../style/carte.css";

function CarteProjet({ projet }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const goToProjet = (id) => {
    navigate(`/projets/${id}`);
  };

  return (
    <div className="carte_projet">
      <div className="carte_container">
        <div className="titre_container">
          <h1>{projet?.nom}</h1>
        </div>
        <div className="type_container">
          <h2>{projet?.type}</h2>
        </div>
        <div className="date_container">
          <div className="dateDebut">
            {projet?.DATE_DEBUT.split("-").reverse().join("/")}
          </div>
          <div className="dateFin">
            {projet?.DATE_FIN.split("-").reverse().join("/")}
          </div>
        </div>
        <button className="vue_button">
          <GrFormView
            className="view_icon"
            onClick={() => goToProjet(projet.id)}
          />
        </button>
      </div>
    </div>
  );
}

export default CarteProjet;

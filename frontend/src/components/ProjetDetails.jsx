/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineUpdate, MdDeleteOutline } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import "../style/projetDetails.css";

function ProjetDetails() {
  const [projet, setProjet] = useState();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const ENDPOINT = `http://localhost:5000/projets/${id}`;
    axios.get(ENDPOINT).then((res) => {
      res.data;
      setProjet(res.data);
    });
  }, []);

  const goToDelete = (id) => {
    navigate(`/projets/delete/${id}`);
  };

  const goToUpdate = (id) => {
    navigate(`/projets/update/${id}`);
  };

  return (
    <div className="general_container">
      {projet ? (
        <div className="recap_container">
          <div className="recap_nom">
            <p>Nom du projet : {projet?.nom}</p>
          </div>
          <div className="recap_type">
            <p>Type de projet : {projet?.type}</p>
          </div>
          <div className="recap_description">
            <p>Description : {projet?.description}</p>
          </div>
          <div className="recap_date">
            <p>
              {" "}
              Du {projet?.DATE_DEBUT.split("-").reverse().join("/")} au{" "}
              {projet?.DATE_FIN.split("-").reverse().join("/")}
            </p>
          </div>
          <div className="recap_createur">
            <p>Instigateur du projet : {projet?.createur}</p>
          </div>
          <div className="recap_collaborateurs">
            <p>
              Collaborateurs : {projet?.collaborateur1} -{" "}
              {projet?.collaborateur2} - {projet.collaborateur3} -{" "}
              {projet.collaborateur4}
            </p>
          </div>
          <div className="section_button">
            <div className="button_update">
              <div className="modif">Modifier le projet</div>
              <button className="btn_update">
                <MdOutlineUpdate
                  className="update_icon"
                  onClick={() => goToUpdate(projet.id)}
                />
              </button>
            </div>
            <div className="button_delete">
              <button className="btn_delete">
                <MdDeleteOutline
                  className="delete_icon"
                  onClick={() => goToDelete(projet.id)}
                />
              </button>
              <div className="suppr">Supprimer le projet</div>
            </div>
          </div>
          <div className="btnRetour">
            <button className="retour" onClick={() => navigate("/projets")}>
              Revenir sur les projets
            </button>
          </div>
        </div>
      ) : (
        <h1> Aucun projet ne correspond</h1>
      )}
    </div>
  );
}

export default ProjetDetails;

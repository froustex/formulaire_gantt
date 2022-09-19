/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { notifySuccess } from "@services/services";
import collaborateurs from "@services/collaborateurs.json";
import "../style/updateProjet.css";

function UpdateProjet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projet, setProjet] = useState();

  const handleChange = (event) => {
    setProjet({
      ...projet,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const ENDPOINT = `http://localhost:5000/projets/${id}`;
    axios.get(ENDPOINT).then((res) => {
      res.data;
      setProjet(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ENDPOINT = `http://localhost:5000/projets/${id}`;
    axios.put(ENDPOINT, projet).then((res) => {
      res.data;
      setProjet(res.data);
      notifySuccess("Le projet a été modifié avec succes");
    });
    navigate("/projets");
  };

  return (
    <div>
      <div className="recap_update">
        <h1>Récapitulatif du projet</h1>
        <div className="update_nom">Nom du projet : {projet?.nom}</div>
        <div className="update_type">Type de projet : {projet?.type}</div>
        <div className="update_des">Description : {projet?.description}</div>
        <div className="update_date">
          {" "}
          Du {projet?.DATE_DEBUT.split("-").reverse().join("/")} au{" "}
          {projet?.DATE_FIN.split("-").reverse().join("/")}
        </div>
        <div className="update_createur">
          Instigateur du projet : {projet?.createur}
        </div>
        <div className="coll_container">
          <div className="update_coll">Collaborateurs</div>
          <div className="coll">
            {" "}
            {projet?.collaborateur1} - {projet?.collaborateur2} -{" "}
            {projet?.collaborateur3} - {projet?.collaborateur4}
          </div>
        </div>
      </div>

      <div className="projet">
        <div className="back">
          <form onSubmit={handleSubmit} method="put">
            <div className="projet_form">
              <h1>Modifier mon projet</h1>
              <div className="update_box">
                <div className="nom_update">
                  <label htmlFor="projet_nom">
                    <p>NOM</p>
                    <input
                      type="text"
                      id="projet_nom"
                      name="nom"
                      onChange={handleChange}
                    />
                  </label>

                  <label htmlFor="projet_type">
                    <p>TYPE</p>
                    <input
                      type="text"
                      id="projet_type"
                      name="type"
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="description_update">
                  <label htmlFor="projet_description">
                    <p>DESCRIPTION</p>
                    <input
                      type="text"
                      id="projet_description"
                      name="description"
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="debut_update">
                  <label htmlFor="choix_date_debut">
                    <p>Date de début du projet</p>
                    <input
                      type="date"
                      id="choix_date-debut"
                      name="DATE_DEBUT"
                      onChange={handleChange}
                    />
                  </label>

                  <label htmlFor="choix_date_fin">
                    <p>Date de fin du projet</p>
                    <input
                      type="date"
                      id="choix_date_fin"
                      name="DATE_FIN"
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="createur_update">
                  <div className="update_select_input">
                    <select
                      id="createur"
                      name="createur"
                      onChange={handleChange}
                    >
                      <option value="">Créateur du projet</option>
                      {collaborateurs.map((collaborateur) => (
                        <option
                          value={collaborateur.nom}
                          name="createur"
                        >{`${collaborateur.nom}`}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="update-collaborateur">
                  <div className="update_collaborateur_bloc">
                    <div className="update_collaborateur1">
                      <select
                        id="collaborateur1"
                        name="collaborateur1"
                        onChange={handleChange}
                      >
                        <option value="">Collaborateur</option>
                        {collaborateurs.map((collaborateur) => (
                          <option
                            value={collaborateur.nom}
                            name="collaborateur1"
                          >{`${collaborateur.nom}`}</option>
                        ))}
                      </select>
                    </div>

                    <div className="update_collaborateur2">
                      <select
                        id="collaborateur2"
                        name="collaborateur2"
                        onChange={handleChange}
                      >
                        <option value="">Collaborateur</option>
                        {collaborateurs.map((collaborateur) => (
                          <option
                            value={collaborateur.nom}
                            name="collaborateur2"
                          >{`${collaborateur.nom}`}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="update_collaborateur_bloc">
                  <div className="update_collaborateur3">
                    <select
                      id="collaborateur3"
                      name="collaborateur3"
                      onChange={handleChange}
                    >
                      <option value="">Collaborateur</option>
                      {collaborateurs.map((collaborateur) => (
                        <option
                          value={collaborateur.nom}
                          name="collaborateur3"
                        >{`${collaborateur.nom}`}</option>
                      ))}
                    </select>
                  </div>

                  <div className="update_collaborateur4">
                    <select
                      id="collaborateur4"
                      name="collaborateur4"
                      onChange={handleChange}
                    >
                      <option value="">Collaborateur</option>
                      {collaborateurs.map((collaborateur) => (
                        <option
                          value={collaborateur.nom}
                          name="collaborateur4"
                        >{`${collaborateur.nom}`}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="update_submit_button">
                  <button id="update_button_creation" type="submit" required>
                    Modifier mon projet
                  </button>
                  <div className="update_navbutton">
                    <button
                      onClick={() => navigate("/projets")}
                      id="update_retour_button"
                    >
                      Revenir sur les projets
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProjet;

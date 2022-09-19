/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { notifySuccess, notifyError } from "@services/services";
import "react-toastify/dist/ReactToastify.css";
import collaborateurs from "@services/collaborateurs.json";
import "../style/form.css";

function Form() {
  const [projet, setProjet] = useState();

  const navigate = useNavigate();

  const handleChange = (event) => {
    setProjet({
      ...projet,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ENDPOINT = "http://localhost:5000/projets";
    axios
      .post(ENDPOINT, projet)
      .then(() => {
        notifySuccess("La création du nouveau projet a été effectuée");
      })
      .catch(() => {
        notifyError("La création du projet n'a pas pu aboutir");
      });
    navigate("/projets");
  };

  return (
    <div className="projet">
      <div className="back">
        <form onSubmit={handleSubmit} method="post">
          <div className="projet_form">
            <h1>Création de projet</h1>
            <div className="projet_box">
              <div className="projet_nom">
                <label htmlFor="projet_nom">
                  <p>NOM</p>
                  <input
                    type="text"
                    id="projet_nom"
                    name="nom"
                    onChange={handleChange}
                    required
                  />
                </label>

                <label htmlFor="projet_type">
                  <p>TYPE</p>
                  <input
                    type="text"
                    id="projet_type"
                    name="type"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="projet_description">
                <label htmlFor="projet_description">
                  <p>DESCRIPTION</p>
                  <input
                    type="text"
                    id="projet_description"
                    name="description"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="date_debut">
                <label htmlFor="choix_date_debut">
                  <p>Date de début du projet</p>
                  <input
                    type="date"
                    id="choix_date-debut"
                    name="DATE_DEBUT"
                    onChange={handleChange}
                    required
                  />
                </label>

                <label htmlFor="choix_date_fin">
                  <p>Date de fin du projet</p>
                  <input
                    type="date"
                    id="choix_date_fin"
                    name="DATE_FIN"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="createur_projet">
                <div className="select_input">
                  <select
                    id="createur"
                    name="createur"
                    onChange={handleChange}
                    required
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

              <div className="collaborateur">
                <div className="collaborateur_bloc">
                  <div className="collaborateur1">
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

                  <div className="collaborateur2">
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

              <div className="collaborateur_bloc">
                <div className="collaborateur3">
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

                <div className="collaborateur4">
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

              <div className="submit_button">
                <button id="button_creation" type="submit" required>
                  Valider mon projet
                </button>
                <div className="navbutton">
                  <button
                    id="retour_button"
                    onClick={() => navigate("/projets")}
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
  );
}

export default Form;

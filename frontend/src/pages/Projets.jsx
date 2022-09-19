/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import CarteProjet from "@components/CarteProjet";
import categories from "@services/categories.json";
import "../style/projets.css";

function Projets() {
  const [projets, setProjets] = useState();
  const [select, setSelect] = useState("none");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const ENDPOINT = "http://localhost:5000/projets";
    axios
      .get(ENDPOINT)
      .then((res) => {
        res.data;
        setProjets(res.data);
      })

      .catch((err) => {
        console.error(err);
      });
  });

  const handleSelect = (e) => {
    setSelect(e.target.value);
    if (e.target.value === "none") {
      return projets;
    }
    return e.target.value;
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="btncreation">
        <button id="btcreation" onClick={() => navigate("/")}>
          Créer un nouveau projet
        </button>
      </div>

      <div className="filtres">
        <div className="filtres_container">
          <div className="searchSection">
            <input
              type="text"
              id="serachBar"
              onChange={handleSearch}
              placeholder="rechercher"
              name="searchBar"
            />
          </div>

          <div className="selectSection">
            <select id="selectType" name="selectType" onChange={handleSelect}>
              <option value="none">Tous les projets</option>

              {categories.map((categorie) => (
                <option value={categorie.cat}>{`${categorie.cat}`}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <h1 className="titre">PROJETS</h1>
      <div className="container">
        <div className="row">
          {projets
            ?.filter((projet) =>
              projet?.nom.toLowerCase().includes(search.toLowerCase())
            )
            .filter((projet) => projet?.type === select || select === "none")
            .map((projet) => (
              <CarteProjet key={projet.id} projet={projet} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Projets;

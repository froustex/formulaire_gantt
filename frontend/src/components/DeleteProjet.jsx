/* eslint-disable */
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { notifySuccess } from "@services/services";

function DeleteProjet() {
  const { id } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    const ENDPOINT = `http://localhost:5000/projets/${id}`;
    axios.delete(ENDPOINT).then(() => {
      notifySuccess("La suppression du projet a été effectuée");
    });
    Navigate("/projets");
  });

  return <div />;
}

export default DeleteProjet;

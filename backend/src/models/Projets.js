const connection = require("../../db-config");

const db = connection.promise();

const findAll = () => {
  return db.query(`SELECT * FROM projets`).then((result) => result);
};

const findOne = (id) => {
  return db
    .query(`SELECT * FROM projets WHERE id = ?`, [id])
    .then((result) => result[0][0]);
};

const create = (body, id) => {
  const {
    nom,
    type,
    description,
    DATE_DEBUT,
    DATE_FIN,
    createur,
    collaborateur1,
    collaborateur2,
    collaborateur3,
    collaborateur4,
  } = body;
  return db
    .query(
      `INSERT INTO projets(id, nom, type, description, DATE_DEBUT, DATE_FIN, createur, collaborateur1, collaborateur2, collaborateur3, collaborateur4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        nom,
        type,
        description,
        DATE_DEBUT,
        DATE_FIN,
        createur,
        collaborateur1,
        collaborateur2,
        collaborateur3,
        collaborateur4,
      ]
    )
    .then((res) => res);
};

const updateOne = (body, id) => {
  return db
    .query(`UPDATE projets SET ? WHERE id = ?`, [body, id])
    .then((res) => res);
};

const destroy = (id) => {
  return db
    .query(`DELETE FROM projets WHERE id = ?`, [id])
    .then(([result]) => result.affectedRows !== 0);
};

module.exports = { findAll, findOne, create, updateOne, destroy };

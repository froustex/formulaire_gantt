/* eslint-disable */
const projetsRouter = require("express").Router();
const {
  findAll,
  findOne,
  create,
  updateOne,
  destroy,
} = require("../models/Projets");

projetsRouter.get("/", (req, res) => {
  findAll().then((result) => res.status(200).json(result[0]));
});

projetsRouter.get("/:id", (req, res) => {
  findOne(req.params.id)
    .then((projet) => {
      if (projet) {
        res.json(projet);
      } else {
        res.status(404).send("Le projet n'existe pas");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Le projet ne peut pas être trouvé");
    });
});

projetsRouter.post("/", (req, res) => {
  create(req.body)
    .then((result) =>
      res
        .status(201)
        .json({ msg: "Le projet a été crée", data: { ...req.body } })
    )
    .catch((err) => res.status(500).json(err));
});

projetsRouter.put("/:id", (req, res) => {
  updateOne(req.body, req.params.id)
    .then((result) =>
      res
        .status(203)
        .json({ msg: "Le projet vient d etre modifié", data: { ...req.body } })
    )
    .catch((err) => res.status(500).json(err));
});

projetsRouter.delete("/:id", (req, res) => {
  destroy(req.params.id).then((deleted) => {
    if (deleted) res.status(200).send("Projet supprimé");
    else res.status(404).send("Le projet n'existe pas");
  });
});

module.exports = projetsRouter;

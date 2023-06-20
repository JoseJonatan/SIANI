"use strict";
const router = require("express").Router();
const pool = require("../../db");

// POST - Insertar
router.post("/", async (req, res) => {
  // console.log("POST - marketing - Request - ", req);
  const { id, capture, other, mark, feedback, client, sales, expo } = req.body;

  try {
    let result = await pool.query(
      "INSERT INTO marketing (quiz_id, mark_capture, mark_other, mark_mark, mark_feedback, mark_client, mark_sales, mark_export) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [id, capture, other, mark, feedback, client, sales, expo]
    );

    // console.log(result);
    res.status(201).json({
      codigo: "201",
      mensaje: 'Operación exitosa',
      resultado: {
        marketing: result.rows
      }
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      codigo: "500",
      mensaje: "Problemas al procesar su solicitud favor de contactar a su administrador",
      detalles: [
        "Problemas internos"
      ]
    });
  }
});

// GET - Obtener
router.get("/", async (req, res) => {
  // console.log("GET - marketing - Request - ", req);

  try {
    let result = await pool.query(
      "SELECT * FROM marketing "
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        marketings: result.rows
      }
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      codigo: "500",
      mensaje: "Problemas al procesar su solicitud favor de contactar a su administrador",
      detalles: [
        "Problemas internos"
      ]
    });
  }
});

// GET company
router.get("/:quizId", async (req, res) => {
  // console.log("GET - marketing - Request - ", req);

  try {
    let result = await pool.query("SELECT * FROM marketing WHERE quiz_id = $1", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        marketing: result.rows
      }
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      codigo: "500",
      mensaje: "Problemas al procesar su solicitud favor de contactar a su administrador",
      detalles: [
        "Problemas internos"
      ]
    });
  }
});

// PUT - Actualizar
router.put("/:quizId", async (req, res) => {
  // console.log("POST - marketing - Request - ", req);

  const { id, capture, other, mark, feedback, client, sales, expo } = req.body;

  try {
    let result = await pool.query(
      "UPDATE marketing SET (quiz_id, mark_capture, mark_other, mark_mark, mark_feedback, mark_client, mark_sales, mark_export) = ($1, $2, $3, $4, $5, $6, $7, $8) WHERE quiz_id = $9 RETURNING *",
      [id, capture, other, mark, feedback, client, sales, expo, req.params.quizId]
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        marketing: result.rows
      }
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      codigo: "500",
      mensaje: "Problemas al procesar su solicitud favor de contactar a su administrador",
      detalles: [
        "Problemas internos"
      ]
    });
  }
});

// Delete - Borrar
router.delete("/:quizId", async (req, res) => {
  // console.log("GET - marketing - Request - ", req);

  try {
    let result = await pool.query("DELETE FROM marketing WHERE quiz_id = $1 RETURNING *", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        marketing: result.rows
      }
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      codigo: "500",
      mensaje: "Problemas al procesar su solicitud favor de contactar a su administrador",
      detalles: [
        "Problemas internos"
      ]
    });
  }
});

module.exports = router;
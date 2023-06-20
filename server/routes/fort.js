"use strict";
const router = require("express").Router();
const pool = require("../../db");

// POST - Insertar
router.post("/", async (req, res) => {
  // console.log("POST - fort - Request - ", req);
  const { id, one, two, three, four, five, six } = req.body;

  try {
    let result = await pool.query(
      "INSERT INTO fort (quiz_id, fort_one, fort_two, fort_three, fort_four, fort_five, fort_six) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [id, one, two, three, four, five, six]
    );

    // console.log(result);
    res.status(201).json({
      codigo: "201",
      mensaje: 'Operación exitosa',
      resultado: {
        fort: result.rows
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
  // console.log("GET - fort - Request - ", req);

  try {
    let result = await pool.query(
      "SELECT * FROM fort "
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        fortes: result.rows
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
  // console.log("GET - fort - Request - ", req);

  try {
    let result = await pool.query("SELECT * FROM fort WHERE quiz_id = $1", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        fort: result.rows
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
  // console.log("POST - fort - Request - ", req);

  const { id, one, two, three, four, five, six } = req.body;

  try {
    let result = await pool.query(
      "UPDATE fort SET (quiz_id, fort_one, fort_two, fort_three, fort_four, fort_five, fort_six) = ($1, $2, $3, $4, $5, $6, $7) WHERE quiz_id = $8 RETURNING *",
      [id, one, two, three, four, five, six, req.params.quizId]
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        fort: result.rows
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
  // console.log("GET - fort - Request - ", req);

  try {
    let result = await pool.query("DELETE FROM fort WHERE quiz_id = $1 RETURNING *", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        fort: result.rows
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
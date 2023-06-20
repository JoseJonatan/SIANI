"use strict";
const router = require("express").Router();
const pool = require("../../db");

// POST - Insertar
router.post("/", async (req, res) => {
  // console.log("POST - advisory - Request - ", req);
  const { id, training, invest, investing, areasS, servisestwo, outside, outsidetwo, certify, certifytwo, advice, advicetwo, areasA, specialtytwo, i_d, i_dtwo, lab, labtwo, important, importantwo, tec, tectwo, conacyt, priority, prioritytwo } = req.body;

  try {
    let result = await pool.query(
      "INSERT INTO advisory ( quiz_id, adv_training, adv_invest, adv_investing, adv_servises, adv_servisestwo, adv_outside, adv_outsidetwo, adv_certify, adv_certifytwo, adv_advice, adv_advicetwo,  adv_specialty, adv_specialtytwo, adv_i_d, adv_i_dtwo, adv_lab, adv_labtwo, adv_important, adv_importantwo, adv_tec, adv_tectwo, adv_conacyt, adv_priority, adv_prioritytwo ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25) RETURNING *",
      [id, training, invest, investing, areasS, servisestwo, outside, outsidetwo, certify, certifytwo, advice, advicetwo, areasA, specialtytwo, i_d, i_dtwo, lab, labtwo, important, importantwo, tec, tectwo, conacyt, priority, prioritytwo]
    );

    // console.log(result);
    res.status(201).json({
      codigo: "201",
      mensaje: 'Operación exitosa',
      resultado: {
        advisory: result.rows
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
  // console.log("GET - Advisory - Request - ", req);

  try {
    let result = await pool.query(
      "SELECT * FROM advisory "
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        advisories: result.rows
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
  // console.log("GET - advisory - Request - ", req);

  try {
    let result = await pool.query("SELECT * FROM advisory WHERE quiz_id = $1", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        advisory: result.rows
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
  // console.log("POST - advisory - Request - ", req);

  const { id, training, invest, investing, areasS, servisestwo, outside, outsidetwo, certify, certifytwo, advice, advicetwo, areasA, specialtytwo, i_d, i_dtwo, lab, labtwo, important, importantwo, tec, tectwo, conacyt, priority, prioritytwo } = req.body;

  try {
    let result = await pool.query(
      "UPDATE advisory SET ( quiz_id, adv_training, adv_invest, adv_investing, adv_servises, adv_servisestwo, adv_outside, adv_outsidetwo, adv_certify, adv_certifytwo, adv_advice, adv_advicetwo,  adv_specialty, adv_specialtytwo, adv_i_d, adv_i_dtwo, adv_lab, adv_labtwo, adv_important, adv_importantwo, adv_tec, adv_tectwo, adv_conacyt, adv_priority, adv_prioritytwo ) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25) WHERE quiz_id = $26 RETURNING *",
      [id, training, invest, investing, areasS, servisestwo, outside, outsidetwo, certify, certifytwo, advice, advicetwo, areasA, specialtytwo, i_d, i_dtwo, lab, labtwo, important, importantwo, tec, tectwo, conacyt, priority, prioritytwo, req.params.quizId]
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        advisory: result.rows
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
  // console.log("GET - advisory - Request - ", req);

  try {
    let result = await pool.query("DELETE FROM advisory WHERE quiz_id = $1 RETURNING *", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        advisory: result.rows
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



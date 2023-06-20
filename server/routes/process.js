"use strict";
const router = require("express").Router();
const pool = require("../../db");

// POST - Insertar
router.post("/", async (req, res) => {
  // console.log("POST - Company - Request - ", req);
  const { id, soft, softtwo, indicators, quality, qualitytwo, control, bottle, method, methodtwo, process, processtwo, technical, plan, securiry, learn, learntwo, industry, industrytwo } = req.body;

  try {
    let result = await pool.query(
      "INSERT INTO process ( quiz_id, pro_soft, pro_softtwo, pro_indicators, pro_quality, pro_qualitytwo, pro_control, pro_bottle, pro_method, pro_methodtwo, pro_process, pro_processtwo, pro_technical, pro_plan, pro_securiry, pro_learn, pro_learntwo, pro_industry, pro_industrytwo ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *",
      [id, soft, softtwo, indicators, quality, qualitytwo, control, bottle, method, methodtwo, process, processtwo, technical, plan, securiry, learn, learntwo, industry, industrytwo]
    );

    // console.log(result);
    res.status(201).json({
      codigo: "201",
      mensaje: 'Operación exitosa',
      resultado: {
        process: result.rows
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
      "SELECT * FROM process "
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        processes: result.rows
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
  // console.log("GET - Advisory - Request - ", req);

  try {
    let result = await pool.query("SELECT * FROM process WHERE quiz_id = $1", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        process: result.rows
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
  // console.log("POST - Advisory - Request - ", req);

  const { id, soft, softtwo, indicators, quality, qualitytwo, control, bottle, method, methodtwo, process, processtwo, technical, plan, securiry, learn, learntwo, industry, industrytwo } = req.body;

  try {
    let result = await pool.query(
      "UPDATE process SET ( quiz_id, pro_soft, pro_softtwo, pro_indicators, pro_quality, pro_qualitytwo, pro_control, pro_bottle, pro_method, pro_methodtwo, pro_process, pro_processtwo, pro_technical, pro_plan, pro_securiry, pro_learn, pro_learntwo, pro_industry, pro_industrytwo ) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) WHERE quiz_id = $20 RETURNING *",
      [id, soft, softtwo, indicators, quality, qualitytwo, control, bottle, method, methodtwo, process, processtwo, technical, plan, securiry, learn, learntwo, industry, industrytwo, req.params.quizId]
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        process: result.rows
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
  // console.log("GET - Advisory - Request - ", req);

  try {
    let result = await pool.query("DELETE FROM process WHERE quiz_id = $1 RETURNING *", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        process: result.rows
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

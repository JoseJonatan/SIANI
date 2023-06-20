"use strict";
const router = require("express").Router();
const pool = require("../../db");

// POST - Insertar
router.post("/", async (req, res) => {
  // console.log("POST - Company - Request - ", req);
  const { id, profile, annual, rate, develop, skill, plan, planning, senior, seniortwo, financial, pay, other } = req.body;

  try {
    let result = await pool.query(
      "INSERT INTO company (quiz_id, comp_profile, comp_annual, comp_rate, comp_develop, comp_skill, comp_plan, comp_planning, comp_senior, comp_seniortwo, comp_financial, comp_pay, comp_other) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
      [id, profile, annual, rate, develop, skill, plan, planning, senior, seniortwo, financial, pay, other]
    );

    // console.log(result);
    res.status(201).json({
      codigo: "201",
      mensaje: 'Operación exitosa',
      resultado: {
        company: result.rows
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
  // console.log("GET - Company - Request - ", req);

  try {
    let result = await pool.query(
      "SELECT * FROM company "
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        companies: result.rows
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
  // console.log("GET - Company - Request - ", req);

  try {
    let result = await pool.query("SELECT * FROM company WHERE quiz_id = $1", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        company: result.rows
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
  // console.log("POST - Company - Request - ", req);

  const { id, profile, annual, rate, develop, skill, plan, planning, senior, seniortwo, financial, pay, other } = req.body;

  try {
    let result = await pool.query(
      "UPDATE company SET (quiz_id, comp_profile, comp_annual, comp_rate, comp_develop, comp_skill, comp_plan, comp_planning, comp_senior, comp_seniortwo, comp_financial, comp_pay, comp_other) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) WHERE quiz_id = $14 RETURNING *",
      [id, profile, annual, rate, develop, skill, plan, planning, senior, seniortwo, financial, pay, other, req.params.quizId]
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        company: result.rows
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
  // console.log("GET - Company - Request - ", req);

  try {
    let result = await pool.query("DELETE FROM company WHERE quiz_id = $1 RETURNING *", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        company: result.rows
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
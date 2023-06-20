"use strict";
const router = require("express").Router();
const pool = require("../../db");

// POST - Insertar
router.post("/", async (req, res) => {
  // console.log("POST - future - Request - ", req);
  const { id, next, process, processtwo, tool, select, selectwo, learn, wish, wishtwo, item, itemtwo, tech, techtwo } = req.body;

  try {
    let result = await pool.query(
      "INSERT INTO future ( quiz_id, fut_next, fut_process, fut_processtwo, fut_tool, fut_select, fut_selectwo, fut_learn, fut_wish, fut_wishtwo, fut_item, fut_itemtwo, fut_tech, fut_techtwo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *",
      [id, next, process, processtwo, tool, select, selectwo, learn, wish, wishtwo, item, itemtwo, tech, techtwo]
    );

    // console.log(result);
    res.status(201).json({
      codigo: "201",
      mensaje: 'Operación exitosa',
      resultado: {
        future: result.rows
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
  // console.log("GET - future - Request - ", req);

  try {
    let result = await pool.query(
      "SELECT * FROM future "
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        futures: result.rows
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
  // console.log("GET - future - Request - ", req);

  try {
    let result = await pool.query("SELECT * FROM future WHERE quiz_id = $1", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        future: result.rows
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
  // console.log("POST - future - Request - ", req);

  const { id, next, process, processtwo, tool, select, selectwo, learn, wish, wishtwo, item, itemtwo, tech, techtwo } = req.body;

  try {
    let result = await pool.query(
      "UPDATE future SET ( quiz_id, fut_next, fut_process, fut_processtwo, fut_tool, fut_select, fut_selectwo, fut_learn, fut_wish, fut_wishtwo, fut_item, fut_itemtwo, fut_tech, fut_techtwo) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) WHERE quiz_id = $15 RETURNING *",
      [id, next, process, processtwo, tool, select, selectwo, learn, wish, wishtwo, item, itemtwo, tech, techtwo, req.params.quizId]
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        future: result.rows
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
  // console.log("GET - future - Request - ", req);

  try {
    let result = await pool.query("DELETE FROM future WHERE quiz_id = $1 RETURNING *", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        future: result.rows
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
const router = require("express").Router();
const pool = require("../../db");

router.post("/next", async (req, res) => {
  const { gtitle } = req.body;

  try {
    const id = await pool.query("SELECT * FROM general WHERE gen_title = $1", [gtitle]);
    console.log(id.rows[0]);
    return res.json(id.rows[0]);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error next");
  }
});

router.post("/busqueda", async (req, res) => {
  const { isAdmin, user_name } = req.body;

  try {
    let general_information;
    if (isAdmin) {
      general_information = await pool.query("SELECT * FROM general");
    } else {
      general_information = await pool.query("SELECT * FROM general WHERE user_name = $1", [user_name]);
    }

    console.log('general_information: ', general_information.rows, isAdmin, user_name);
    return res.json(general_information.rows);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error next");
  }
});

// POST - Insertar
router.post("/", async (req, res) => {
  // console.log("POST - fort - Request - ", req);
  const { user, title, company, contact, tel, email, years, number, market, other } = req.body;

  try {
    let result = await pool.query(
      "INSERT INTO general (user_name, gen_title, gen_name, gen_contact, gen_tel, gen_email, gen_years, gen_number, gen_market, gen_other) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [user, title, company, contact, tel, email, years, number, market, other]
    );

    let quiz_id = result.rows[0].quiz_id;

    pool.query("INSERT INTO company (quiz_id) VALUES ($1)", [quiz_id]);
    pool.query("INSERT INTO advisory (quiz_id) VALUES ($1)", [quiz_id]);
    pool.query("INSERT INTO process (quiz_id) VALUES ($1)", [quiz_id]);
    pool.query("INSERT INTO marketing (quiz_id) VALUES ($1)", [quiz_id]);
    pool.query("INSERT INTO future (quiz_id) VALUES ($1)", [quiz_id]);
    pool.query("INSERT INTO fort (quiz_id) VALUES ($1)", [quiz_id]);

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
  // console.log("GET - general - Request - ", req);

  try {
    let result = await pool.query(
      "SELECT * FROM general "
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        generales: result.rows
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
  // console.log("GET - general - Request - ", req);

  try {
    let result = await pool.query("SELECT * FROM general WHERE quiz_id = $1", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        general: result.rows
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

  const { user, title, company, contact, tel, email, years, number, market, other } = req.body;

  try {
    let result = await pool.query(
      "UPDATE general SET (user_name, gen_title, gen_name, gen_contact, gen_tel, gen_email, gen_years, gen_number, gen_market, gen_other) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) WHERE quiz_id = $11 RETURNING *",
      [user, title, company, contact, tel, email, years, number, market, other, req.params.quizId]
    );

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      mensaje: 'Operación exitosa',
      resultado: {
        general: result.rows
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
  // console.log("GET - general - Request - ", req);

  try {
    let result = await pool.query("DELETE FROM general WHERE quiz_id = $1 RETURNING *", [req.params.quizId]);

    // console.log(result);
    res.status(200).json({
      codigo: "200",
      message: 'Operación exitosa',
      resultado: {
        general: result.rows
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

const router = require("express").Router();
const pool = require("../../db");

router.post("/create",  async (req, res) => {
    const { id, email, job, tel } = req.body;
  
    try {
        let response = await pool.query(
        "UPDATE users SET user_email = $1, user_job = $2, user_tel = $3 WHERE user_id = $4 RETURNING *",
        [ email, job, tel, id ]
      );
  
      console.log(response);    
      res.json({
          message: 'Information Updated Succesfully',
          body: {
              info: { email, job, tel,id }
          }
      });

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error / Strengths");
    }
  });
  module.exports = router;
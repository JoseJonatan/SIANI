const router = require("express").Router();
const pool = require("../../db");

  router.post("/find", async (req, res) => {
    const { gtitle } = req.body;
  
    try {
      const id = await pool.query("SELECT * FROM general WHERE gen_title = $1", [ gtitle ]); 
      console.log(id.rows[0]);
      return res.json(id.rows[0]);
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error next");
    }
  });

  router.post("/search", async (req, res) => {
    const { gname } = req.body;
  
    try {
      const id = await pool.query("SELECT * FROM general WHERE gen_name = $1", [ gname ]); 
      console.log(id.rows[0]);
      return res.json(id.rows[0]);
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error search");
    }
  });


  router.post("/view", async (req, res) => {
    const { qid } = req.body;
  
    try {
      const comp = await pool.query("SELECT *"
      +" FROM company"
      +" INNER JOIN advisory"
      +" ON company.quiz_id = advisory.quiz_id"
      +" INNER JOIN process"
      +" ON advisory.quiz_id = process.quiz_id"
      +" INNER JOIN marketing"
      +" ON process.quiz_id = marketing.quiz_id"
      +" INNER JOIN fort"
      +" ON marketing.quiz_id = fort.quiz_id"
      +" INNER JOIN future"
      +" ON fort.quiz_id = future.quiz_id"
      +" WHERE company.quiz_id = $1", [qid]); 

      console.log(comp.rows[0]);
      return res.json(comp.rows[0]);
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error view");
    }
  });


  module.exports = router;
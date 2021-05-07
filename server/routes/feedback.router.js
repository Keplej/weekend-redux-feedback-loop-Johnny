const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET  all the orders that have been placed, populate with data from the feedback
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "prime_feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR GET /api/feedback', error);
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    let feedback = req.body;
    console.log(`Feedback in router`, feedback);
    
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4, $5);`;

    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then(resutlt => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log(`ERROR`, error);
        
        res.sendStatus(500);
    })
})

module.exports = router;
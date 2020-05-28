const { v4: uuidv4 } = require('uuid');
var express = require('express');
var router = express.Router();
const { Pool } = require('pg');
var connStr = process.env.DATABASE_URL || 'postgres://kpaelduqstghfg:3bb65431d85acdc8447664ceedc5f23518605e0a620a12d200c895708d6831f5@ec2-35-169-254-43.compute-1.amazonaws.com:5432/df5g3lmv8p7nvg';



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**Add a record to the table */
router.get('/add', async (req, res) => {

  console.log('connStr:' + connStr );

  try{
  const pool = new Pool({
    connectionString: connStr,
    ssl: {
      rejectUnauthorized: false
    }
  });


  const client = await pool.connect();
  const name = 'Emp02-MeetRes-' + Date.now();
  const extId = uuidv4();
  const startTime = new Date();
  const duration = 30;
  const locId = '1315w000000De3SAAS';

  const results = await client.query("INSERT INTO salesforce.ContactEncounter(name,starttime,encounterduration,external_id__c,locationid) Values($1,$2,$3,$4,$5)",
  [name, startTime, duration, extId, locId]);
  client.release();  

  res.render('add', { title: 'Express', res: results });
}
catch(err){
    console.log(err);
    res.send("Error " + err);
  }
});

module.exports = router;

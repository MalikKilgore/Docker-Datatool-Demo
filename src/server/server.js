//Imports
import { S3 } from "@aws-sdk/client-s3";
import { PutObjectCommand } from "@aws-sdk/client-s3"
import express from "express"
import bodyParser from "body-parser"
import mysql from "mysql"
const localPORT = 3020;
const s3Client = new S3({ region: 'us-east-1' });

// App
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configures MySQL connection
const connection = mysql.createConnection({
  connectionLimit: 10,
  host: '',
  port: '',
})

// Starts Express server
app.listen(localPORT, function () {
  console.log("Express server listening on port: " + localPORT);
});

/*Receives GET request from Axios. 
Forwards request to Aurora, then routes response back to Axios on the Frontend.*/
let payload = []
app.get("/services/m/propagate", async (req, res) => {
  console.log('Querying Data from Aurora...')
  //Establishes MySQL connection
  await connection.connect(function (err) {
    if (err) throw err
    console.log('Connected to MySQL Aurora');
  });

  //This way it will be easier to sort through the different data they provide.
  await connection.query("SELECT * FROM letters_used_alphabetical", function (err, results, fields) {
    if (err) throw err;
    const newResults = JSON.stringify(results)
    return payload.push(newResults)
  })
  await connection.query("SELECT * FROM vowel_counts", function (err, results, fields) {
    if (err) throw err;
    const newResults = JSON.stringify(results)
    return payload.push(newResults)
  })
  await connection.query("SELECT * FROM starting_letter_counts", function (err, results, fields) {
    if (err) throw err;
    const newResults = JSON.stringify(results)
    return payload.push(newResults)
  })
  await connection.query("SELECT * FROM pw_contains_numseq", function (err, results, fields) {
    if (err) throw err;
    const newResults = JSON.stringify(results)
    return payload.push(newResults)
  })
  await connection.query("SELECT * FROM pw_totals_num_chars", function (err, results, fields) {
    if (err) throw err;
    const newResults = JSON.stringify(results)
    return payload.push(newResults)
  })
  await connection.query("SELECT * FROM bignum_averages", function (err, results, fields) {
    if (err) throw err;
    const newResults = JSON.stringify(results)
    return payload.push(newResults)
  })

  const finalPayload = JSON.stringify(payload)
  await res.send(finalPayload)
  console.log('Returning Query')
  connection.destroy()
});

//Uploading CSVs
app.post("/services/m/filesend", async (req, res) => {
  const filepath = req.params.filepath
  const csvFileContent = req.params.csvFileContent
  const data = req.params.data

  const params = {
    Bucket: '',
    Key: '',
    Body: csvFileContent,
  }
  try {
    console.log("Request received. Attempting to upload to S3")
    await s3Client.send(new PutObjectCommand(params));
    res.send('File uploaded successfully.')
  } catch (err) {
    console.log(err)
  }
})
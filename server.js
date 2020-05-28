const axios = require("axios");
const express = require("express");
const app = express();
const port = 4000;

app.get("/doctors", async (req, res) => {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    );
    res.send(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  res.end();
});

app.get("/patients", async (req, res) => {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
    );
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
  res.end();
});

app.get("/patients", async (req, res) => {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  res.end();
});

app.get("/patients/:patientId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${req.params.patientId}`
    );
    res.send(response.data);
    console.log(response.data);
  } catch (error) {
    res.send(error);
    console.error(error);
  }
  res.end();
});

app.listen(port, () => console.log(`listening on port:${port}`));

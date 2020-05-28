const axios = require("axios");
const express = require("express");
const app = express();
const port = 4000;

app.get("/listings", async (req, res) => {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings"
    );
    res.send(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  res.end();
});

app.get("/agents", async (req, res) => {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/agents"
    );
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
  res.end();
});

app.get("/agents/:language", async (req, res) => {
  try {
    const response = await axios.get(
      `https://my-json-server.typicode.com/Codaisseur/listings-agents-data/agents/`
    );
    const agents = response.data.filter((a) => {
      return a.languages.includes(req.params.language);
    });
    console.log('agents:');
    console.log(agents);
    res.send(agents);
    res.end();
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  res.end();
});

app.listen(port, () => console.log(`listening on port:${port}`));

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send({ success: "I hope you are doing very best..." });
});

app.listen(8000, () => {
  console.log("Listeining on port 8000");
});

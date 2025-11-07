const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: "Hello from jenkins-simple-node-app" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
module.exports = app;

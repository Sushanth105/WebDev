const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(500).send("hiiii");
});

app.listen(3100, () => console.log("Server running on port 3000"));

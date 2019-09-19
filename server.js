// require express
const express = require('express');
// require path
const path = require('path');

const app = express();


app.get("/", (request, response) => {
    app.sendFile(path.join(__dirname,"public", "home.html"));
})


const PORT = process.env.PORT || 6969;

app.listen(PORT, () => console.log(`SEVER BEGAN LISTENING ON PORT: ${PORT}`));
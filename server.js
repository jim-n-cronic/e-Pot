// require express
const express = require('express');
// require path
const path = require('path');

const app = express();



app.use(express.static('app/public'));
//========================
// \\ GET htmlRoutes //
require("./app/routing/htmlRoutes")(app);
// \\ GET apiRoutes //

//========================
// PORT OUT
const PORT = process.env.PORT || 6969;

app.listen(PORT, () => console.log(`SEVER BEGAN LISTENING ON PORT: ${PORT}`));


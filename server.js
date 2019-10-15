// require express
const express = require('express');
const bdyPrs = require('body-parser');
const app = express();


app.use(bdyPrs());
app.use(express.static('app/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//========================
// \\ GET htmlRoutes //
require("./app/routing/htmlRoutes")(app);
// \\ GET apiRoutes //
require("./app/routing/apiRoutes")(app);
//========================
// PORT OUT
const PORT = process.env.PORT || 6969;

app.listen(PORT, () => console.log(`SEVER BEGAN LISTENING ON PORT: ${PORT}`));


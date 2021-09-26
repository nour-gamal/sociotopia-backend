const express = require("express");
require("./db/mongoose");
var cors = require("cors");

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.listen(PORT, () => {
	console.log(`The server is working on port ${PORT}`);
});

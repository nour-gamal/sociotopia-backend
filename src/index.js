const express = require("express");
const userRouter = require("./router/user");
require("./db/mongoose");
var cors = require("cors");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);

app.listen(PORT, () => {
	console.log(`The server is working on port ${PORT}`);
});

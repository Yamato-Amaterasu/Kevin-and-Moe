const express = require("express");
const app = express();
PORT = 2003;

app.use("/users", require("./routes/users"));

app.listen(PORT, () => console.log(`server is up on port ${PORT}`));

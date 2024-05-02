// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
const config  = require("./config");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

// app.listen(3000, function(){
//     console.log("3000");
// });


app.listen(config.PORT, () => {
  console.log('serve at http://localhost:3000');
});
 
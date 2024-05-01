const express = require("express");
const mainRouter = require("./routes/index");

app.use(cors());
app.use(express.json());
const app = express();
// all request from api/v1 please go this router (routes/index) all request handle 
app.use("api/v1", mainRouter);

app.listen(3000, function(){
    console.log("Server runnig on 3000")
})
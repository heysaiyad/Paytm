const express = require("express");

const router = express.Router();
const userRouter = require("./user");

router.use("/user", userRouter);
module.exports = router;
// api/v1/user
// api/v1/transactaion...

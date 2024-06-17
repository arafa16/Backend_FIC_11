const path = require("path");

require("dotenv").config({path: path.join(__dirname, "../.env")});

const express = require("express");

const app = express();

const authRouter = require("./routes/auth.route.js");
const bookRouter = require("./routes/book.route.js");
const orderRouter = require("./routes/order.route.js");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use("/api/auth", authRouter)
app.use("/api/book", bookRouter)
app.use("/api/order", orderRouter)

app.listen(process.env.SERVER_PORT || 3000, ()=> {
    console.log("server running");
});
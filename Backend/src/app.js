const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:5173",
        "https://genai-backend-s7cu.onrender.com"
    ],
    credentials:true 
}));
// require all the routes here

const authRouter = require("./routes/auth.route")
const interviewRouter = require("./routes/interview.route")

// using all the routes here
app.use("/api/auth",authRouter)
app.use("/api/interview",interviewRouter)


module.exports = app; 
const app = require("./src/app");
const connectToDB = require("./src/config/database");

app.get("/", (req, res) => {
  res.send("Backend is running successfully ");
});
connectToDB()
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port`,process.env.PORT);
}) 
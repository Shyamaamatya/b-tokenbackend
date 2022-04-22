const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const userRouter = require("./routes/User")
const tokenRouter = require("./routes/Token")
const connectDatabase = require("./db")
const dotenv = require("dotenv");
var cors = require('cors');
// Setting up config file
dotenv.config({ path: "./config.env" });

connectDatabase()


app.use(cors());
app.use(express.json())
app.use("/api/v1/user", userRouter)
app.use("/api/v1/token", tokenRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
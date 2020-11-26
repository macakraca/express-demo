import express from "express"
import cors from "cors"
import { users, passwords } from "./data.js"

const app = express()
app.use(cors())

const port = 3000

app.get("/auth/:legacyUsername", (req, res) => {
  console.log("👂 GET", req.params.legacyUsername)
  const user = users[req.params.legacyUsername] || {}

  res.type("application/json")
  res.send(user)
})

app.post("/auth/:legacyUsername", function (req, res) {
  console.log("🎁 POST", req.params.legacyUsername)
  const password = passwords[req.params.legacyUsername] || {}

  res.type("application/json")
  res.send({
    password,
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

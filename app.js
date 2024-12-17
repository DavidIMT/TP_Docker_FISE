const express = require('express')
const mysql   = require('mysql2')
const app = express()

const port           = process.env.PORT     || 8080
const MYSQL_PORT     = process.env.DB_PORT  || 3306
const MYSQL_HOST     = process.env.HOST     || "localhost"
const MYSQL_PASSWORD = process.env.PASSWORD || "paswrd"
const MYSQL_USER     = process.env.USER     || "root"

const connection = mysql.createConnection({
  host     : MYSQL_HOST,
  user     : MYSQL_USER,
  password : MYSQL_PASSWORD,
  port     : MYSQL_PORT,
  insecureAuth : true
})

connection.connect()

app.get('/', (req, res) => {
  res.send(connection.state === 'disconnected' ? "Connection à la DB failed." : "Connection à la DB sucessfull.")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

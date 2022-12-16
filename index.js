import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import * as dotenv from 'dotenv'; 
dotenv.config()
const { host, username, password, database } = process.env

console.log(host, username, password, database)

<<<<<<< HEAD
try {
    const conn = mysql.createConnection({ host: 'localhost', user: 'root', password:'', database: 'juice store' })
=======
   const conn = mysql.createConnection({ host: 'localhost', user: 'root', password:'', database: 'database_name' })
>>>>>>> 6a45c8f7b120f6e9b54eedb5436dd0e2584545f1
   const tableSchema = `CREATE TABLE IF NOT EXISTS USERS (email varchar(100) ,password varchar(100))`

    conn.query(tableSchema)

<<<<<<< HEAD
    console.log(err)
}
=======

>>>>>>> 6a45c8f7b120f6e9b54eedb5436dd0e2584545f1
const app = express()
app.use(cors())

app.post("/login", (req, res) => {

    try {
        const { email, password } = req.body
        const sql = "INSERT INTO `users`( `email`, `password`) VALUES (?,?)"
        const id = conn.query(sql, [email, password])
        console.log(id)
        res.sendStatus(200)

    } catch (error) {
        console.log(error)
    }


})

app.listen(9999, () => {
    console.log('listen at port 9999')
})

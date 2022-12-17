import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import * as dotenv from 'dotenv'; 
dotenv.config()
const { host, username, password, database } = process.env

console.log(host, username, password, database)



    const conn = mysql.createConnection({ host: 'localhost', user: 'root', password:'', database: 'juice store' })

   const tableSchema = `CREATE TABLE IF NOT EXISTS USERS (email varchar(100) ,password varchar(100))`

    conn.query(tableSchema)


const app = express()
app.use(express.json())
app.use(cors())

app.post("/login", (req, res) => {

    try {
        console.log(req.body)
        const { email, password } = req.body
        const sql = "INSERT INTO `users`( `email`, `password`) VALUES (?,?)"
        const id = conn.query(sql, [email, password])
        res.sendStatus(200)

    } catch (error) {
        console.log(error)
    }


})

app.listen(9999, () => {
    console.log('listen at port 9999')
})

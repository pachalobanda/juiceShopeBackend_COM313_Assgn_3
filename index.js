import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import * as dotenv from 'dotenv' 
const  {host,username,password,database} dotenv.config()

const conn = mysql.createConnection({host:host,user:username,password:password,database:database})
const tableSchema  = `CREATE TABLE IF NOT EXISTS USERS (email varchar(100) ,password varchar(100))'

try{

conn.query(tableSchema)
}catch(err){

console.log(err)
}

const app = express()
app.use(express.json())
app.use(cors())

app.post("/login",(req,res)=>{
    conn.execute()
    try {
        const   {email,password} = req.body
        const sql = "INSERT INTO `users`( `email`, `password`) VALUES (?,?)"
        const id = conn.query(sql,[email,password])
 console.log(id)
        res.sendStatus(200)
 
    } catch (error) {
        console.log(error)
    }
 

})

app.listen(9999,()=>{
    console.log('listen at port 9999')
})

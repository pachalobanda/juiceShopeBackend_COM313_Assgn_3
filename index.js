import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const conn = mysql.createConnection({host:'localhost',user:'root',password:'',database:'juice store'})

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
import {pool} from '../db.js'

export const typeUser = async(req,res) =>{
    const {tipo} = req.body;
    await pool.query("INSERT INTO  tipos_cuenta(tipo) VALUES (?)",[
        tipo
    ])
    res.send("usuario seleccionado")
}
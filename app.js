const express = require("express")
const app = express()
const port = 3500

app.get("/", (req,res)=>{
    res.json({mensaje:"Aplicacion funcionando correctamente"})
})

app.listen(port,()=>{
    console.log(`aplicacion corriendo en el puerto  ${port}`)
})




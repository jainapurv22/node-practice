const app = require("express")()

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.listen(5000,()=>{
    console.log("server is listening on port 5000")
})
const app = require("express")()


app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.send("It's all about it..")
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found</h1>')
})
app.listen(5000,()=>{
    console.log("server is listening on port 5000")
})
const express = require("express");
const app = express();
app.use(express.json());

let list = [];

app.get('/list' , (req , res) => {
    res.send(list);
});

app.post('/list' , (req , res) => {
    let {name} = req.body;
    list.push(name);
    res.send(list);
})

app.put('/list/:index' , (req , res) => {
    let num = parseInt(req.params.index + " ");
    let {name} = req.body;
    list[num] = name;
    res.send(list);
})

app.delete('/list/:index' , (req , res) => {
    let num = parseInt(req.params.index + " ");
    list.splice(num , 1)
    res.send(list);
})

app.listen(3000 , () => {
    console.log("Server started qat port @ 3000");
})
const express = require("express");
const app = express();

let students = ['yash' , 'patel' , 'darshan university' , 'rajkot' , 'india'];

app.get('/students/:index' , (req , res) => {
    res.send(students[req.params.index]);
})

app.listen(3000 , () => {
    console.log("Server is listening at port 3000");
})
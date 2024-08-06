const express = require('express');
const app = express();

let students = ['yash' , 'patel' , 'darshan' , 'rajkot' , 'india'];

//get by all

app.get('/student' , (req , res) => {
    res.send(students);
})

//get by id

app.get('/student/:index' , (req , res) => {
    res.send(students[req.params.index]);
})

app.post('/student/:name' , (req , res) => {
    students.push(req.params.name);
    res.send("Student added");
})

app.patch('/student/:index/:newName' , (req , res) => {
    const {index , newName} = req.params;
    students[index] = newName;
    res.send('Student updated');
})

app.delete('/student/:index' , (req , res) => {
    students.splice(req.params.index , 1);
    res.send("Student deleted");
})

app.listen(3000 , () => {
    console.log("Server is listen at 3000");
})
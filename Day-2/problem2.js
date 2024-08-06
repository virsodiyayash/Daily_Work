const express = require('express');
const app = express();

app.use(express.json());

const students = [
    {
        id:1083,
        name:'yash',
        email:'yash@darshan.ac.in',
        age:18
    },
    {
        id:1291,
        name:'vinit',
        email:'vinit@darshan.ac.in',
        age:18
    }
];

//get all
app.get('/students' , (req , res) => {
    res.send(students);
})

//get by id
app.get('/students/:id' , (req , res) => {
    const ans = students.find((stu) => {
        if(stu.id == req.params.id){
            return true;
        } 
    })
    res.send(ans);
})

app.post('/students' , (req , res) => {
    students.push(req.body);
    res.send("student added");
})

app.patch('/students/:id' , (req , res) => {
    const idToEdit = students.findIndex((stu) => {
        if(stu.id == req.params.id){
            return true;
        }
    })
    students[idToEdit] = req.body;
    res.send("Student Updated");
})

app.delete('/students/:id' , (req , res) => {
    const idToEdit = students.findIndex((stu) => {
        if(stu.id == req.params.id){
            return true;
        }
    })
    students.splice(idToEdit , 1);
    res.send("Student deleted");
})

app.listen(3000 , () => {
    console.log('server started at 3000');
})
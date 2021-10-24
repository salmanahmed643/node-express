const express = require('express');
const cors = require('cors')
const app = express();

const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('i am learning node express')
})


const users = [
    {id: 0, name: 'shabana', email: 'shabana@gamil.com', phone: '017888'},
    {id: 1, name: 'shabnoor', email: 'shabnoor@gamil.com', phone: '017888'},
    {id: 2, name: 'Shrabonti', email: 'Shrabonti@gamil.com', phone: '017888'},
    {id: 3, name: 'Suchorita', email: 'Suchorita@gamil.com', phone: '017888'},
    {id: 4, name: 'Soniya', email: 'Soniya@gamil.com', phone: '017888'},
    {id: 5, name: 'Susmita', email: 'Susmita@gamil.com', phone: '017888'},
];


app.get('/users', (req, res) => {
    const search = req.query.search
    if(search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    } else {
        res.send(users)
    }
});


// app METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log("hitting the post", req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple']);
})


app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("Yummy Yummy tok marka fazli")
})



app.listen(port, () => {
    console.log('Listening to port', port)
})
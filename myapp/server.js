// const { application } = require('express');
const express = require('express');
const app = express();

let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}

app.get('/', (req, res)=>{
	res.send('hi');
})

app.listen(PORT, ()=>{
	console.log('listening');
})

const array = require('./models/pastwork.js')
const workers = require('./models/staff.js')
const ourLinks = require('./models/links.js')

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.render('home.ejs');
});

app.get('/companyhistory', (req, res) => {
    res.render('history.ejs');
});

app.get('/pastwork', (req, res) => {
    res.render(
        'pastwork.ejs',
        {
            jobs:array
        }
    );
});

app.get('/staff', (req, res) => {
    res.render('staff.ejs',
        {
            staff:workers
        }
    );
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs',
    {
        staff:workers
    }
    );
});

app.get('/links', (req, res) => {
    res.render('links.ejs',
    {
        links:ourLinks
    });
});

// app.listen(3000, ()=> {
//     console.log('hi');
// });


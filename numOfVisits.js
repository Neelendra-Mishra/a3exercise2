/*
<!-- A3-->
<!-- Neelendra Mishra-->
<!-- Student ID 40224310-->
<!-- SOEN 287 WEB PROGRAMMING -->
*/

//                                                              --- START OF THE CODE ---

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Calculating the total number of times you visited the site. 

app.get('/numOfVisits', (req, res) => {
    let visitCount = req.cookies.visitCount ? parseInt(req.cookies.visitCount) + 1 : 1;
    let lastVisit = req.cookies.lastVisit ? new Date(req.cookies.lastVisit) : new Date();

    res.cookie('visitCount', visitCount);
    res.cookie('lastVisit', new Date());

    if (visitCount === 1) {
        res.send('Welcome to my webpage! It is your first time that you are here.');
    } else {
        res.send(`Hello, this is the ${visitCount} time that you are visiting my webpage. Last time you visited my webpage on: ${lastVisit}`);
    }
});

app.listen(3001, () => {
    console.log('Exercise 2 server is running on port 3001');
});

//                                                                  --END OF THE CODE--
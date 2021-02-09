const { request, response } = require("express");

let express = require("express");

//création d'un objet app qui me permettra d'instancier express
let app = express();

//très important afin que ce soit des variable et non du texte brut
app.use(express.urlencoded());

let todo = ["Faire les courses","Nourir le chat"];

let routes = require('./mesroutes');

app.use('/', routes);


app.use(express.static("Public"));



// app.get('/',(request,response) => { 
//     response.render('home2.ejs');

// });

// app.post('/',(request,response) => { 
//     console.log(request.body);
//     response.send(" Hello " + request.body.test);

// });

//launch server

let route = require('./mesroutes');

app.use('/',routes);

app.listen(3000, function () {
    console.log('Server running on port 3000');
    });
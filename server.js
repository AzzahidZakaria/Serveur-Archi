
let express = require("express");

let app = express();

let todo = ["Faire les courses","Nourir le chat"];



//Set route
//app.get('/', (request, response) => {
    //response.send('Hello World !'); 
    //response.render("home.ejs");
//});



 //using url
app.get('/index',(request,response) => {
        //response.send('Bonjour' + request.query.name);
        response.render("home.ejs",{todo,messageConfirm:" Vous pouvez ajouter une tâche ci-dessous :"});
     
});

app.get('/remove/:todo',(request,response) => {
    let item_number = request.params.todo;
    //response.send('Bonjour' + request.query.name);
    todo.splice(item_number,1);
     

    response.render("home.ejs",{todo,messageConfirm:" Suppression réussie"}); 
});

app.get('/ajouter',(request,response) => {
    let todoForm = request.query.todo;

    //response.send('Bonjour' + request.query.name);
    todo.push(todoForm);  
// Add an item  
    response.render("home.ejs",{todo,messageConfirm:" Ajout réussi"}); 
});

//using url with param
//app.get('/index/:name/:zakaria',(request,response) => {
    //response.send('Bonjour' + request.params.name);
    //response.render("home.ejs",{param1: request.params.name, param2: request.params.zakaria});
//});

//setting middleware
app.use(express.static("Public"));

//launch server
app.listen(3000, function () {
    console.log('Server running on port 3000');
    });



    
   